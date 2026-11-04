# Contact form → Google Sheet

The website's contact form sends each message to a small Google Apps Script, which adds it as a
new row in a Google Sheet. Setup takes about 10 minutes and needs a Google account. Use the
account that should own the messages, for example the studio Gmail.

## 1. Create the sheet

1. Go to <https://sheets.google.com> and create a **blank spreadsheet**.
2. Name it, for example **Website contact messages**.

You don't need to add any headers. The script creates a tab called **Contact form** with the
headers the first time it runs.

## 2. Add the script

1. In the sheet, open **Extensions → Apps Script**. A new tab opens with the script editor.
2. Delete everything in the `Code.gs` file there.
3. Open [`Code.gs`](Code.gs) from this folder, copy all of it, and paste it into the editor.
4. *(Optional)* To also get an email for every new message, put an address in the
   `NOTIFY_EMAIL` line near the top, for example `const NOTIFY_EMAIL = 'you@example.com';`.
5. Click the **Save** icon (💾), or press Ctrl+S.

## 3. Test it and allow access

1. In the toolbar's function dropdown, pick **testSetup**, then click **Run**.
2. Google asks for permission. Click **Review permissions**, then choose your account.
3. You may see **"Google hasn't verified this app"**. That's normal for your own script. Click
   **Advanced → Go to (project name) (unsafe)**, then **Allow**.
4. Go back to the sheet. There's now a **Contact form** tab with headers and one test row.
   Delete the test row.

## 4. Publish it as a web app

1. In the script editor, click **Deploy → New deployment**.
2. Click the gear ⚙ next to **Select type** and choose **Web app**.
3. Fill in:
   - **Description:** `Contact form`
   - **Execute as:** **Me** (your account)
   - **Who has access:** **Anyone**

   "Anyone" is needed so website visitors can send messages without signing in to Google. It
   does **not** let anyone read your sheet; they can only add a row through the form.
4. Click **Deploy**, then **Authorize access** if asked.
5. Copy the **Web app URL**. It looks like
   `https://script.google.com/macros/s/AKfy…/exec`.

**Check:** paste that URL into a browser tab. You should see
`{"ok":true,"status":"Contact form endpoint is running."}`.

## 5. Connect the website

1. Open `src/config/contact.js`.
2. Paste the URL into `formEndpoint`:

   ```js
   formEndpoint: 'https://script.google.com/macros/s/AKfy…/exec',
   ```
3. Save, then run the site (`npm run dev`). Send a test message from the contact form. You should
   see "Thank you, your message has been sent", and a new row should appear in the sheet.
4. Commit and push the change so the live site uses it.

Until `formEndpoint` is set, the form works the old way and opens the visitor's email app.

## Changing the script later

If you edit `Code.gs` after deploying, the live web app **doesn't** update by itself:

1. **Deploy → Manage deployments**.
2. Click the ✏️ pencil on your deployment, and set **Version** to **New version**.
3. Click **Deploy**.

This keeps the same URL, so you don't need to change the website. Creating a *New
deployment* instead gives you a new URL, which you'd then have to paste into `contact.js`
again.

## Troubleshooting

| Problem | Fix |
|---|---|
| The form says "could not be sent" | Open the web app URL in a browser. If it doesn't show `"ok":true`, check that **Who has access** is **Anyone**, and that the URL ends in `/exec`, not `/dev`. |
| Nothing appears in the sheet | In the script editor, open **Executions** (the ☰ list icon on the left) to see errors for each submission. |
| You changed the script but nothing changed | Publish a new version (see *Changing the script later*). |
| You turned on `NOTIFY_EMAIL` and now get a permission error | Run **testSetup** once more from the editor and allow the new "send email" permission. |

## What gets saved

| Column | Content |
|---|---|
| Timestamp | When the message arrived |
| Name | Required |
| Company | Optional |
| Topic | Job opportunity, Freelance project, or Something else |
| Message | Required, up to 5,000 characters |
| Page | The page the form was sent from |

The form has a hidden spam-trap field. Messages from bots that fill it in are silently dropped.

The sheet holds visitors' names and messages, so share it only with people who need it.
