# Zoho Integration Guide for Contact Form

## Overview
This guide will help you connect the contact form to Zoho CRM to automatically create leads/contacts when someone submits the form.

## Step 1: Set Up Zoho CRM API

### 1.1 Create a Zoho CRM Account
1. Go to https://www.zoho.com/crm/ and sign up/login
2. Navigate to your Zoho CRM dashboard

### 1.2 Generate API Credentials
1. Go to **Setup** → **Developer Space** → **APIs**
2. Click **Add Client** or **Generate New Client**
3. Choose **Server-based Applications**
4. Fill in:
   - **Client Name**: ArcnetLabs Contact Form
   - **Homepage URL**: Your website URL (e.g., https://arcnetlabs.com)
   - **Authorized Redirect URIs**: Your callback URL (can be your website URL)
5. Click **Create**
6. **IMPORTANT**: Copy and save:
   - **Client ID**
   - **Client Secret**
   - **Refresh Token** (you'll need to generate this)

### 1.3 Generate Refresh Token
1. Go to https://api-console.zoho.com/
2. Click **Add Client** → Select **Server-based Applications**
3. Use the same Client ID and Client Secret from step 1.2
4. Select scopes: `ZohoCRM.modules.leads.CREATE`, `ZohoCRM.modules.contacts.CREATE`
5. Click **Generate**
6. Copy the **Refresh Token** (save it securely!)

### 1.4 Get Your Zoho Data Center
Your data center URL depends on your region:
- **US**: https://www.zohoapis.com
- **EU**: https://www.zohoapis.eu
- **IN**: https://www.zohoapis.in
- **AU**: https://www.zohoapis.com.au
- **JP**: https://www.zohoapis.jp
- **CA**: https://www.zohoapis.ca

Check your Zoho CRM URL to determine your data center.

## Step 2: Set Up Environment Variables

Create a `.env` file in your project root (or add to Netlify/Vercel environment variables):

```env
# Zoho CRM API Credentials
ZOHO_CLIENT_ID=your_client_id_here
ZOHO_CLIENT_SECRET=your_client_secret_here
ZOHO_REFRESH_TOKEN=your_refresh_token_here
ZOHO_DATA_CENTER=https://www.zohoapis.com

# Optional: Email notification
NOTIFICATION_EMAIL=your-email@arcnetlabs.com
```

**⚠️ IMPORTANT**: Never commit `.env` to git! Add it to `.gitignore`.

## Step 3: Choose Integration Method

### Option A: Netlify Functions (Recommended if hosting on Netlify)
- ✅ Serverless, no backend needed
- ✅ Free tier available
- ✅ Easy to deploy

### Option B: Vercel Functions (If hosting on Vercel)
- ✅ Similar to Netlify
- ✅ Good performance

### Option C: Custom Backend API
- ✅ Full control
- ⚠️ Requires server management

We'll implement **Option A (Netlify Functions)** as it's the most common for static sites.

## Step 4: Configure Environment Variables in Netlify

Since the code is already set up, you just need to add your Zoho credentials:

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variables:
   - `ZOHO_CLIENT_ID` - Your Zoho Client ID
   - `ZOHO_CLIENT_SECRET` - Your Zoho Client Secret
   - `ZOHO_REFRESH_TOKEN` - Your Zoho Refresh Token
   - `ZOHO_DATA_CENTER` - Your Zoho data center URL (e.g., `https://www.zohoapis.com`)
   - `NOTIFICATION_EMAIL` (optional) - Email to receive notifications

4. Click **Save**

## Step 5: Test Locally (Optional)

To test the integration locally before deploying:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Create a `.env` file in your project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   Then fill in your Zoho credentials.

3. Start Netlify Dev:
   ```bash
   netlify dev
   ```

4. The site will run at `http://localhost:8888` with functions support

5. Test the contact form - it should create a lead in Zoho CRM

## Step 6: Deploy to Netlify

1. Push your code to GitHub (if not already done)
2. Netlify will automatically deploy
3. Make sure environment variables are set in Netlify dashboard
4. Test the contact form on your live site

## Step 5: Testing

1. Fill out the contact form on your website
2. Check Zoho CRM → **Leads** or **Contacts** module
3. Verify the new lead/contact was created
4. Check browser console for any errors

## Troubleshooting

### Common Issues:
1. **401 Unauthorized**: Check your refresh token is valid
2. **Invalid Grant**: Refresh token expired, regenerate it
3. **CORS Error**: Ensure your function URL is correct
4. **Field Mapping Error**: Check field names match your Zoho CRM fields

## Field Mapping

The contact form fields map to Zoho CRM as follows:
- `name` → `First Name` + `Last Name` (split)
- `email` → `Email`
- `company` → `Company`
- `projectType` → `Lead Source` or custom field
- `message` → `Description` or `Notes`

You may need to adjust these mappings based on your Zoho CRM field names.
