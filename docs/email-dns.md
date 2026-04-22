# Email DNS for humanapprovedai.com

The website does not need mail records to load. Add these only when email is being used for `@humanapprovedai.com` or `@humanapprovedai.co.uk`.

## Minimum Anti-Spoofing Setup

- SPF: add a TXT record at the root with the sender your email provider recommends.
- DKIM: add the TXT or CNAME records supplied by the email provider.
- DMARC: add a TXT record at `_dmarc` with a restrictive policy once SPF/DKIM pass.

## Suggested Starter DMARC

Use monitoring first if the sending provider is not final:

```txt
v=DMARC1; p=none; rua=mailto:hello@humanapprovedai.com; adkim=s; aspf=s
```

After real mail is sending and passing SPF/DKIM, move toward:

```txt
v=DMARC1; p=quarantine; rua=mailto:hello@humanapprovedai.com; adkim=s; aspf=s
```

Do not add generic MX records until the email provider is chosen.
