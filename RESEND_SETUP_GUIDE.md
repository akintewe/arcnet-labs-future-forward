# Resend Email Integration Setup Guide

## Overview
This guide will help you set up Resend to receive contact form submissions via email. Resend is free for up to 3,000 emails/month and 100 emails/day.

## Step 1: Create Resend Account (2 minutes)

1. Go to https://resend.com/
2. Click **"Sign Up"** (top right)
3. Sign up with your email (or use GitHub/Google)
4. Verify your email address

## Step 2: Get Your API Key (1 minute)

1. After logging in, go to **API Keys** (in the left sidebar)
2. Click **"Create API Key"**
3. Give it a name: `Arcnet Labs Contact Form`
4. Select permissions: **"Sending access"** (or Full access)
5. Click **"Add"**
6. **IMPORTANT**: Copy the API key immediately (you won't see it again!)
   - It looks like: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## Step 3: Verify Your Domain (Optional but Recommended)

For production, you should verify your domain to send from your own email address:

1. Go to **Domains** in Resend dashboard
2. Click **"Add Domain"**
3. Enter your domain: `arcnetlabs.com` (or your domain)
4. Add the DNS records Resend provides to your domain
5. Wait for verification (usually a few minutes)

**Note**: For testing, you can use Resend's default domain `onboarding@resend.dev` without verification.

## Step 4: Add Environment Variables to Netlify (2 minutes)

1. Go to **Netlify Dashboard** → Your Site → **Site settings** → **Environment variables**

2. Add these variables:

   **Required:**
   - `RESEND_API_KEY` = `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (your API key from Step 2)
   - `NOTIFICATION_EMAIL` = `your-email@arcnetlabs.com` (where you want to receive form submissions)

   **Optional:**
   - `FROM_EMAIL` = `contact@arcnetlabs.com` (or use default `onboarding@resend.dev` for testing)

3. Click **Save**

4. **Redeploy** your site (or trigger a new deployment)

## Step 5: Test the Integration (1 minute)

1. Go to your live website
2. Fill out the contact form
3. Submit the form
4. Check your email inbox (the `NOTIFICATION_EMAIL` you set)
5. You should receive a nicely formatted email with the form submission

## Email Format

The email you receive will include:
- **From**: Arcnet Labs Contact Form (or your custom FROM_EMAIL)
- **To**: Your notification email
- **Reply-To**: The submitter's email (so you can reply directly)
- **Subject**: "New Contact Form Submission: [Project Type]"
- **Content**: All form fields in a formatted HTML email

## Free Tier Limits

- ✅ **3,000 emails/month** (free)
- ✅ **100 emails/day** (free)
- ✅ **Unlimited domains** (free)
- ✅ **Email API access** (free)

This is more than enough for a contact form!

## Troubleshooting

### ❌ "RESEND_API_KEY is not configured"
- **Solution**: Make sure you added `RESEND_API_KEY` to Netlify environment variables
- Redeploy your site after adding the variable

### ❌ Email not received
- Check your spam folder
- Verify `NOTIFICATION_EMAIL` is correct in Netlify
- Check Netlify function logs: **Site** → **Functions** → **View logs**

### ❌ "Invalid API key"
- Verify you copied the entire API key (starts with `re_`)
- Make sure there are no extra spaces
- Regenerate the API key if needed

## What's Already Done ✅

- ✅ Netlify function created (`netlify/functions/submit-contact-resend.ts`)
- ✅ Frontend API client updated (`src/api/contact.ts`)
- ✅ Contact form integrated
- ✅ HTML email template with nice formatting
- ✅ Error handling implemented
- ✅ CORS configured

## Next Steps

1. Set up Resend account (5 minutes)
2. Add API key to Netlify
3. Test the form
4. (Optional) Verify your domain for production emails

That's it! Much simpler than Zoho! 🎉
