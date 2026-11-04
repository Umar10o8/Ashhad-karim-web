/**
 * Contact form -> Google Sheet
 *
 * Paste this whole file into the Apps Script editor of the Google Sheet that should collect
 * the messages (Extensions > Apps Script), then deploy it as a Web app. Full steps are in
 * google-apps-script/README.md.
 *
 * Each submission becomes one row: Timestamp | Name | Company | Topic | Message | Page.
 */

// ---- Settings ----------------------------------------------------------------------------

// Name of the tab (sheet) the rows go into. It is created, with headers, if it does not exist.
const SHEET_NAME = 'Contact form';

// Set to an email address to get an email for every new message, or leave '' for none.
// Turning this on asks for one extra permission (send email) the next time you authorise.
const NOTIFY_EMAIL = '';

// Longest text kept per field; anything longer is cut off.
const MAX_LENGTH = { name: 120, company: 160, topic: 80, message: 5000, page: 300 };

const HEADERS = ['Timestamp', 'Name', 'Company', 'Topic', 'Message', 'Page'];

// ---- Web app entry points ----------------------------------------------------------------

/** Receives the form submission from the website. */
function doPost(e) {
  try {
    const params = (e && e.parameter) || {};

    // Hidden "website" field: people never see it, so if it is filled in, a bot sent this.
    // Reply "ok" so the bot learns nothing, but save nothing.
    if (params.website) return reply({ ok: true });

    const entry = {
      name: clean(params.name, MAX_LENGTH.name),
      company: clean(params.company, MAX_LENGTH.company),
      topic: clean(params.topic, MAX_LENGTH.topic),
      message: clean(params.message, MAX_LENGTH.message),
      page: clean(params.page, MAX_LENGTH.page),
    };

    if (!entry.name || !entry.message) {
      return reply({ ok: false, error: 'Name and message are required.' });
    }

    // Only one submission writes at a time, so two messages never land on the same row.
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      getSheet().appendRow([new Date(), entry.name, entry.company, entry.topic, entry.message, entry.page]);
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL) notify(entry);

    return reply({ ok: true });
  } catch (error) {
    console.error(error);
    return reply({ ok: false, error: 'Could not save the message.' });
  }
}

/** Opening the web app URL in a browser shows this, which is a quick way to check it is live. */
function doGet() {
  return reply({ ok: true, status: 'Contact form endpoint is running.' });
}

// ---- Helpers -----------------------------------------------------------------------------

function getSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(5, 420);
  }
  return sheet;
}

/**
 * Trims and shortens a value. Text starting with = + - or @ gets a leading apostrophe so
 * Sheets shows it as plain text instead of running it as a formula.
 */
function clean(value, maxLength) {
  let text = String(value == null ? '' : value).trim().slice(0, maxLength);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function notify(entry) {
  const subject = 'New website message: ' + (entry.topic || 'Contact form') + ' from ' + entry.name;
  const body = [
    'Name: ' + entry.name,
    'Company: ' + (entry.company || '-'),
    'Topic: ' + (entry.topic || '-'),
    'Page: ' + (entry.page || '-'),
    '',
    entry.message,
    '',
    'All messages: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
  ].join('\n');
  MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
}

function reply(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: run this once from the editor (select testSetup, click Run) to create the tab and
 * add a test row, which also triggers the permission prompt. Delete the test row afterwards.
 */
function testSetup() {
  getSheet().appendRow([new Date(), 'Test', '', 'Test', 'Test row from the Apps Script editor', '']);
}
