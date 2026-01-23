# Zoho Integration Setup Checklist

## Quick Setup Steps

### ✅ Step 1: Get Zoho API Credentials (5-10 minutes)

1. **Create/Login to Zoho CRM**
   - Go to https://www.zoho.com/crm/
   - Sign up or log in

2. **Generate API Client**
   - Go to **Setup** → **Developer Space** → **APIs**
   - Click **Add Client** → Choose **Server-based Applications**
   - Fill in:
     - Client Name: `ArcnetLabs Contact Form`
     - Homepage URL: Your website URL
     - Authorized Redirect URIs: Your website URL
   - Click **Create**
   - **SAVE**: Client ID and Client Secret

3. **Generate Refresh Token**
   - Go to https://api-console.zoho.com/
   - Click **Add Client** → **Server-based Applications**
   - Use your Client ID and Client Secret
   - Select scopes:
     - `ZohoCRM.modules.leads.CREATE`
     - `ZohoCRM.modules.contacts.CREATE`
   - Click **Generate**
   - **SAVE**: Refresh Token

4. **Find Your Data Center**
   - Check your Zoho CRM URL:
     - `.com` → `https://www.zohoapis.com`
     - `.eu` → `https://www.zohoapis.eu`
     - `.in` → `https://www.zohoapis.in`
     - `.com.au` → `https://www.zohoapis.com.au`
     - `.jp` → `https://www.zohoapis.jp`
     - `.ca` → `https://www.zohoapis.ca`

### ✅ Step 2: Configure Netlify Environment Variables (2 minutes)

1. Go to **Netlify Dashboard** → Your Site → **Site settings** → **Environment variables**

2. Add these variables:
   ```
   ZOHO_CLIENT_ID = [your_client_id]
   ZOHO_CLIENT_SECRET = [your_client_secret]
   ZOHO_REFRESH_TOKEN = [your_refresh_token]
   ZOHO_DATA_CENTER = [your_data_center_url]
   NOTIFICATION_EMAIL = [your-email@arcnetlabs.com] (optional)
   ```

3. Click **Save**

4. **Redeploy** your site (or trigger a new deployment)

### ✅ Step 3: Test the Integration (2 minutes)

1. Go to your live website
2. Fill out the contact form
3. Submit the form
4. Check Zoho CRM → **Leads** module
5. Verify the new lead was created

## Troubleshooting

### ❌ "401 Unauthorized" Error
- **Solution**: Check that your refresh token is correct and hasn't expired
- Regenerate the refresh token if needed

### ❌ "Invalid Grant" Error
- **Solution**: Your refresh token expired. Generate a new one from https://api-console.zoho.com/

### ❌ Lead not appearing in Zoho
- **Solution**: 
  1. Check Netlify function logs (Site → Functions → View logs)
  2. Verify field mappings match your Zoho CRM fields
  3. Check that you have permission to create leads in Zoho CRM

### ❌ CORS Error
- **Solution**: This shouldn't happen with Netlify functions, but if it does, check the function URL is correct

## Field Mappings

The contact form maps to Zoho CRM fields as follows:

| Form Field | Zoho CRM Field |
|------------|----------------|
| name | First_Name + Last_Name (split) |
| email | Email |
| company | Company |
| projectType | Lead_Source |
| message | Description |

**Note**: You may need to adjust these in `netlify/functions/submit-contact.ts` if your Zoho CRM has different field names.

## What's Already Done ✅

- ✅ Netlify function created (`netlify/functions/submit-contact.ts`)
- ✅ Frontend API client created (`src/api/contact.ts`)
- ✅ Contact form updated to use Zoho integration
- ✅ Error handling implemented
- ✅ CORS configured
- ✅ TypeScript types defined

## Next Steps After Setup

1. Test the form submission
2. Verify leads appear in Zoho CRM
3. Set up email notifications (optional)
4. Customize field mappings if needed
5. Add any additional Zoho CRM fields you want to capture

## Support

If you encounter issues:
1. Check Netlify function logs
2. Check browser console for errors
3. Verify all environment variables are set correctly
4. Test the Zoho API credentials directly using curl or Postman
