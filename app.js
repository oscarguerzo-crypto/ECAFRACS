const knowledge = {
network:{
"Slow Speeds / No Connection / WIFI issues / Streaming":{
title:"Network - Slow Speeds / No Connection / WIFI issues / Streaming",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ol>
<li>Check account status (arrears, invoice date, coverage period)</li>
<li>Check software version and e-SIM device compatibility</li>
<li>Check if SMS, calls, and data are all not working</li>
<li>Check for any error messages</li>
<li>Confirm if device is online</li>
<li>Check the signal strength</li>
<li>Check the device's make and model</li>
<li>Confirm if issue affects all services or specific app/site</li>
<li>Ask when the issue started</li>
<li>Confirm if device is UK purchased</li>
<li>Check customer location; is the customer in UK?</li>
<li>Proceed with Troubleshooting.</li>
</ol>

<div class="warning-box">
<ul>
<li>If the customer is in arrears – This is not a network issue. Please proceed with billing issue.</li>
<li>If the customer is not in the UK – Mention that we only cater UK customers, then continue with other concerns.</li>
</ul>
</div>

<h3>Troubleshooting Steps</h3>

<h4>Loop</h4>
<ul>
<li>Run a speed test</li>
<li>Optimize the connection</li>
<li>Reboot the device</li>
<li>Get the customer’s exact location if escalation is needed</li>
<li>Factory reset as last resort - check with TL first.</li>
</ul>

<h4>e-SIM</h4>
<ul>
<li>Confirm if SMS, calls, and data are all not working</li>
<li>Restart the device; reboot</li>
<li>Check the APN settings</li>
<li>Toggle airplane mode</li>
</ul>
`
},

"Activation":{
title:"Network - Activation",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<h4>Loop</h4>
<ol>
<li>Set up your loop by completing the Android setup process on the device.</li>
<li>Tap the activation widget on the loop's home screen.</li>
<li>Scan the QR code displayed on your loop with your phone.</li>
<li>Follow the activation prompts on the LoopDL website.</li>
<li>Enter your activation code.</li>
</ol>

<div class="warning-box">
<ul>
<li>Do not proceed if the customer cannot verify the account.</li>
<li>If the e-SIM is on another device, continue with Transfer e-SIM / e-SIM not working.</li>
</ul>
</div>

<h4>e-SIM</h4>
<ul>
<li>Use a stable internet connection.</li>
<li>Confirm the device is e-SIM compatible.</li>
<li>Verify latest iOS or Android version.</li>
<li>Verify if purchased in the UK.</li>
<li>Restart the device.</li>
<li>Delete unused e-SIM profiles if needed.</li>
</ul>
`
},

"APN Settings":{
title:"Network - APN Settings",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<p>The loop uses an e-SIM and activation happens automatically during setup.</p>

<h4>Loop</h4>
<ul>
<li>No manual APN setting needed.</li>
</ul>

<h4>e-SIM</h4>
<ul>
<li>The e-SIM profile and network settings are provisioned automatically as part of activation.</li>
</ul>
`
},

"SIM Swap":{
title:"Network - SIM Swap",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<p>Verify reason for SIM swap and exhaust all troubleshooting first.</p>

<h4>Loop</h4>
<ul>
<li>Verify device ID.</li>
<li>Do not take action without speaking to the customer.</li>
</ul>

<h4>e-SIM</h4>
<ol>
<li>Identify the customer's device_id.</li>
<li>Check current eSIM state.</li>
<li>Initiate installation or swap if required.</li>
<li>Confirm activation and connectivity.</li>
<li>Advise restart if required.</li>
</ol>

<div class="warning-box">
<ul>
<li>Gain approval from support before processing SIM swap.</li>
<li>If there is a ported number, do not continue with SIM swap.</li>
</ul>
</div>
`
},
"SMS and Voice Query":{
title:"Network - SMS and Voice Query",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ul>
<li>Check if e-SIM is activated</li>
<li>Check e-SIM settings on phone</li>
</ul>

<h3>Troubleshooting</h3>

<h4>e-SIM</h4>
<ul>
<li>Check the signal</li>
<li>Check Messaging and Call settings</li>
<li>Restart the phone</li>
</ul>
`
},

"e-SIM Provision":{
title:"Network - e-SIM Provision",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ol>
<li>Check if the order was placed under services</li>
<li>Check if the payment was successful</li>
<li>Check if the device is e-SIM compatible</li>
<li>Check if the customer is currently in the UK</li>
</ol>

<h3>Troubleshooting</h3>

<h4>e-SIM</h4>
<ul>
<li>Ask the customer to reboot the device</li>
<li>Uninstall and Reinstall the LoopDL app</li>
<li>Escalate the ticket if it is still not visible on the station/customer's end</li>
</ul>

<div class="warning-box">
<ul>
<li>If the phone is not e-SIM compatible, let the customer know so they may best decide on what to do next.</li>
<li>If the customer is not in the UK – Mention that we only cater UK customers, then continue with other concerns.</li>
</ul>
</div>
`
},

"Transfer e-SIM / e-SIM not working":{
title:"Network - Transfer e-SIM / e-SIM not working",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ul>
<li>Confirm e-SIM is fully deleted from the old phone</li>
<li>If not, ask if they still have access to it</li>
<li>Ask where the customer bought the phone (within the UK?)</li>
<li>Check if the device supports e-SIM</li>
<li>Get the make and model and verify compatibility</li>
<li>Verify if e-SIM is allocated on the Loop mobile device</li>
</ul>

<div class="warning-box">
<ul>
<li>If the customer does not have access to the old phone anymore and wants recovery, escalate for backend recovery.</li>
<li>If customer agrees on SIM swap, escalate for SIM swap approval.</li>
<li>Make sure the e-SIM is not ported.</li>
</ul>
</div>

<h3>Troubleshooting (e-SIM Transfer Steps)</h3>

<ol>
<li>Delete e-SIM from old phone</li>
<li>Open Settings</li>
<li>Tap Cellular or Mobile Data</li>
<li>Tap SIMs or Cellular Plans</li>
<li>Select the e-SIM</li>
<li>Tap Delete e-SIM / Remove Cellular Plan</li>
<li>Tap Confirm</li>
<li>Install e-SIM on new phone</li>
<li>Open the app</li>
<li>Sign in</li>
<li>Select Install e-SIM</li>
<li>Follow on-screen instructions</li>
</ol>

<div class="warning-box">
<ul>
<li>If it did not work: Uninstall e-SIM / LoopDL app then reinstall.</li>
<li>If issue persists, do not SIM swap → Escalate.</li>
</ul>
</div>
`
},

"Adult Content":{
title:"Network - Adult Content",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<p><strong>Positioning:</strong></p>

<p>"Unfortunately, this is not a setting we can change or disable on your behalf. To resolve this, kindly follow the steps below to turn off the Adult Content filter."</p>

<ol>
<li>Log in to your account</li>
<li>Go to My Account</li>
<li>Select Profile</li>
<li>Click on Manage Device</li>
<li>Go to My Plan</li>
<li>Toggle OFF the Adult Content Filter</li>
</ol>

<p>Once you turn it off, a pop-up with a website link will appear.</p>

<h3>Verification</h3>

<ol>
<li>Tap the link and follow the steps</li>
<li>Enter your details</li>
<li>Upload a valid ID for age verification</li>
</ol>

<div class="warning-box">
<ul>
<li>Verification is completed via the UK verification site and not through Loop.</li>
<li>Customers must restart their phone after completion.</li>
<li>Certain websites may still be blocked under UK law.</li>
</ul>
</div>
`
},

"How to reset network settings on an iPhone":{
title:"Network - How to reset network settings on an iPhone",
content:`
<h3>Steps</h3>

<ol>
<li>Go to Settings</li>
<li>General</li>
<li>Transfer or Reset iPhone</li>
<li>Reset</li>
<li>Reset Network Settings</li>
</ol>
`
},
"Steps to Manually Connect Vodafone UK e-SIM":{
title:"Network - Steps to Manually Connect Vodafone UK e-SIM",
content:`
<h3>Things we check</h3>
<ul>
<li>Confirm e-SIM is fully deleted from the old phone</li>
<li>Ask where the customer bought the phone (within the UK?)</li>
<li>Check if the device supports e-SIM</li>
<li>Get the make and model and verify compatibility</li>
<li>Verify if e-SIM is allocated</li>
</ul>
`
},

"Use a 3rd Party SIM on Loop":{
title:"Network - Use a 3rd Party SIM on Loop",
content:`
<h3>Process to Follow (Customer Side)</h3>
<ol>
<li>Get e-SIM QR Code or LPA activation code from previous provider</li>
<li>Get ICCID of Loop</li>
<li>Send details to support@loopdl.co.uk</li>
</ol>

<h3>Process on theStation (Agent Side)</h3>
<ol>
<li>Find customer and device</li>
<li>Go to Action Station → Device → Add e-SIM</li>
<li>Paste e-SIM code (LPA)</li>
<li>Click Add e-SIM</li>
<li>Monitor SIM status</li>
</ol>

<div class="warning-box">
<ul>
<li>Make sure to add the LPA.</li>
<li>Example: LPA: abcd</li>
</ul>
</div>
`
},

"SIM Card Expired":{
title:"Network - SIM Card Expired",
content:`
<h3>Initial Checks</h3>
<ul>
<li>Verify e-SIM Support</li>
<li>Stable Internet Connection</li>
<li>Remove VPNs</li>
</ul>

<h3>Troubleshooting Installation</h3>
<ul>
<li>Use Manual Entry</li>
<li>Restart and Retry</li>
<li>Check for Software Updates</li>
<li>Reset Network Settings</li>
</ul>

<h3>Activating the eSIM</h3>
<ul>
<li>Enable Data Roaming</li>
<li>Toggle Airplane Mode</li>
<li>Select Network Manually</li>
</ul>
`
},

"Using LSA String (manual)":{
title:"Network - Using LSA String (manual)",
content:`
<h3>Steps</h3>

<ol>
<li>Go to Settings</li>
<li>Tap Network & Internet</li>
<li>Tap SIMs</li>
<li>Tap Add SIM</li>
<li>Tap Don't have a SIM card?</li>
<li>Tap Enter code manually</li>
<li>Paste or type your LSA string</li>
<li>Tap Connect / Add</li>
<li>Wait for profile download</li>
<li>Tap Activate / Turn on</li>
<li>Restart phone</li>
</ol>

<div class="warning-box">
<ul>
<li>The process is currently on hold.</li>
<li>Please refrain from using it until further update.</li>
</ul>
</div>
`
},

"Delete e-SIM (Android, Samsung)":{
title:"Network - Delete e-SIM (Android, Samsung)",
content:`
<h3>Steps</h3>

<ol>
<li>Go to Settings</li>
<li>Tap Connections</li>
<li>Tap SIM Manager</li>
<li>Select e-SIM profile</li>
<li>Tap Remove</li>
<li>Confirm</li>
</ol>
`
},

"Device Is Not e-SIM Compatible (iOS)":{
title:"Network - Device Is Not e-SIM Compatible (iOS)",
content:`
<h3>Things we check</h3>
<ul>
<li>Check make and model</li>
<li>Check if SIM swap was made</li>
</ul>

<h3>Troubleshooting Steps</h3>

<ol>
<li>Remove existing LoopDL e-SIMs</li>
<li>Go to Settings</li>
<li>Tap Cellular / Mobile Data</li>
<li>Delete LoopDL eSIM profiles</li>
<li>Reinstall app</li>
<li>Verify Calls, Data and SMS</li>
<li>Restart iPhone</li>
<li>Try installation again</li>
<li>Restart after second attempt</li>
</ol>

<div class="warning-box">
<ul>
<li>Only remove LoopDL e-SIMs.</li>
<li>Do not delete other SIMs unless advised.</li>
<li>If still not working after max 2 attempts, escalate.</li>
</ul>
</div>
`
},

"Onboarding Process":{
title:"Network - Onboarding Process",
content:`
<h3>Steps</h3>

<ol>
<li>Run speed test and optimization in theStation</li>
<li>Check customer experience</li>
<li>Verify connection speed with customer</li>
<li>Get customer feedback</li>
<li>Confirm satisfaction and overall experience</li>
<li>Move to healthy</li>
</ol>
`
}
},
billing:{
"Make Payment":{
title:"Billing - Make Payment",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ul>
<li>Check the expiration date of the card on file</li>
<li>Verify the last four digits of the card</li>
</ul>

<h3>What to do next</h3>
<ul>
<li>Tell the customer that payments are processed via saved card details or by entering new payment information at checkout.</li>
<li>If the customer has an active subscription, payments are charged automatically monthly.</li>
</ul>
`
},

"Customer can't pay":{
title:"Billing - Customer can't pay",
content:`
<h3>Things we check</h3>

<ul>
<li>Check the card expiration date</li>
<li>Review the error message</li>
<li>Check the transaction history</li>
</ul>

<h3>What to do next</h3>
<ul>
<li>Tell the customer that payments are processed via saved card details or by entering new payment information at checkout.</li>
<li>If the customer has an active subscription, payments are charged automatically monthly.</li>
</ul>

<div class="warning-box">
<ul>
<li>If the customer wants PTP, let them know that it is a great idea and treat it as feedback for the team.</li>
</ul>
</div>
`
},

"Amount Check":{
title:"Billing - Amount Check",
content:`
<h3>Things we check</h3>

<ul>
<li>Check the total amount to be paid on the invoice or on the station</li>
<li>Check the station for invoice</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Tell the customer to visit the LoopDL website.</li>
<li>Inform them to check the invoice and that payments are always upfront.</li>
</ul>
`
},

"Update Card Details":{
title:"Billing - Update Card Details",
content:`
<h3>What to do next</h3>

<p>Customers can update their card details by logging into their account on loopdl.co.uk.</p>

<ol>
<li>Go to My Account</li>
<li>Billing & Payments</li>
<li>Click on the card</li>
<li>Select update card details</li>
<li>Process the edit and confirm</li>
</ol>
`
},

"Refund":{
title:"Billing - Refund",
content:`
<h3>Things we check</h3>

<ul>
<li>Check if the refund is valid</li>
<li>Check timestamps</li>
<li>Reason(s) why the refund is necessary</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Ask support for permission to refund (£1 is not refundable)</li>
<li>If approved, process refund</li>
</ul>

<div class="warning-box">
<ul>
<li>Advise the customer that refunds can take 7-10 business days depending on their bank.</li>
</ul>
</div>
`
},

"Credit / Compensation":{
title:"Billing - Credit / Compensation",
content:`
<h3>What to do next</h3>

<ol>
<li>Verify the credit reason</li>
<li>Double check on theStation if the reason is valid</li>
<li>Escalate to Team Lead for approval</li>
<li>If approved, process the credit on theStation</li>
</ol>
`
},
"Invoice":{
title:"Billing - Invoice",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ul>
<li>Confirm which month(s) the customer needs the invoice(s) for</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Verify if the customer's email address is correct</li>
<li>Send the invoice to the customer via theStation</li>
<li>Let them know that it will be sent through email</li>
<li>Advise self-service options for future invoice checks at loopdl.co.uk</li>
</ul>
`
},

"Bill Dispute":{
title:"Billing - Bill Dispute",
content:`
<h3>Things we check</h3>

<ul>
<li>Verify the reason for the bill dispute</li>
<li>Billing period, due date and amount</li>
<li>Disputed charge</li>
<li>Contract</li>
<li>Usage</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Escalate to Team Lead if valid</li>
<li>Process credit or refund depending on the situation</li>
<li>Follow process for Refund or Credit / Compensation</li>
</ul>
`
},

"Proof of Payment":{
title:"Billing - Proof of Payment",
content:`
<h3>Things we check</h3>

<ul>
<li>Payer's information</li>
<li>Payment details (date and time, amount)</li>
<li>Transaction reference</li>
<li>Payment status</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Escalate to Team Lead if valid</li>
<li>Wait for update</li>
<li>Process credit or refund depending on the situation</li>
<li>Follow Refund or Credit / Compensation process</li>
</ul>
`
},

"Reactivation (With Free Service)":{
title:"Billing - Reactivation (With Free Service)",
content:`
<h3>Things we check</h3>

<ul>
<li>Customer account is in pending cancellation status</li>
<li>There is still remaining free service</li>
<li>Customer wants to reinstate the service</li>
</ul>

<h3>What to do next</h3>

<ol>
<li>Revert cancellation in theStation</li>
<li>If it does not go through, ask Team Lead for assistance</li>
<li>If reinstated, check if service is working</li>
<li>Loop - reset loop to activate account</li>
<li>e-SIM - ask customer to reboot phone if service is still inactive</li>
</ol>
`
},

"Reactivation (Inactive Account)":{
title:"Billing - Reactivation (Inactive Account)",
content:`
<h3>Things we check</h3>

<ul>
<li>Customer account inactive due to non-payment</li>
<li>Customer wants to reinstate account</li>
</ul>

<h3>What to do next</h3>

<ol>
<li>Customer signs into loopdl.co.uk</li>
<li>Navigate to My Account → Manage → My Subscription</li>
<li>Reactivate or resubscribe to Unlimited Data plan</li>
<li>Service should resume after successful reactivation</li>
</ol>

<div class="warning-box">
<ul>
<li>If all fails, process factory reset (TL approval required)</li>
<li>On the station under configured e-SIM, click resend e-SIM</li>
<li>Follow activation prompts again</li>
</ul>
</div>
`
},

"Wall Garden":{
title:"Billing - Wall Garden",
content:`
<h3>Things we check</h3>

<ul>
<li>Payment made after due date</li>
<li>Service shows inactive</li>
</ul>

<h3>What to do next</h3>

<ol>
<li>Escalate to Support to reinstate service</li>
<li>Contact customer after reinstatement</li>
<li>If service works, close ticket</li>
<li>If not, ask customer to logout and reinstall app</li>
<li>If still not working, escalate to support</li>
</ol>
`
}
},
account:{
"Password Reset":{
title:"Account - Password Reset",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ul>
<li>Verify if the customer is the account owner</li>
<li>Account holder/customer verified account – proceed</li>
<li>Another person/cannot verify account – let account holder contact us</li>
<li>Confirm the email address added</li>
<li>Verify if email was created manually or using Google or Apple</li>
</ul>

<h3>What to do next</h3>

<ol>
<li>Advise customer to use Forgot Password from the LoopDL app or website</li>
<li>If manually created email and not working, go to account actions</li>
<li>Select Reset Password and Send</li>
<li>Ask customer to check email for the 4 digit code</li>
<li>Go to LoopDL website and click Sign In</li>
<li>Click Forgot Password</li>
<li>Enter 4 digit code and new password</li>
<li>Confirm and continue</li>
</ol>

<div class="warning-box">
<ul>
<li>If using Google or Apple, advise customer to follow their password reset process.</li>
</ul>
</div>
`
},

"Account Deletion":{
title:"Account - Account Deletion",
content:`
<h3>Things we check</h3>

<ul>
<li>Ask what error message customer receives</li>
<li>Check if there is an active service or subscription</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Advise deletion must be completed by the customer via loopdl.co.uk</li>
<li>Advise they may need to wait until after cancellation date</li>
</ul>
`
},

"Change Details":{
title:"Account - Change Details",
content:`
<h3>Things we check</h3>

<ul>
<li>Verify customer is account owner</li>
<li>Verify last 4 digits of card on file</li>
<li>Verify card expiration date</li>
<li>Confirm account email address</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Advise customer this must be completed through loopdl.co.uk</li>
<li>Direct customer to My Account settings</li>
</ul>
`
}
},
porting:{
"Port-In":{
title:"Porting - Port-In",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ul>
<li>Number to port IN or MSISDN</li>
<li>PAC code from previous provider</li>
<li>MSISDN active during porting process</li>
</ul>

<h3>What to do next</h3>

<ol>
<li>Navigate to burger menu on top right corner</li>
<li>Click Sign In</li>
<li>Sign in to loopdl.co.uk</li>
<li>Go to My Account</li>
<li>Click Manage Active Plans</li>
<li>Open Number Porting options</li>
<li>Click Port In</li>
<li>Enter number and PAC code</li>
<li>Follow remaining prompts</li>
</ol>

<div class="warning-box">
<ul>
<li>Porting may take up to 48 business hours.</li>
<li>Service interruption may occur during the transfer.</li>
<li>If there is an error, inform TL and escalate for manual porting.</li>
</ul>
</div>
`
},

"Port-Out":{
title:"Porting - Port-Out",
content:`
<h3>Things we check</h3>

<ul>
<li>Number to port OUT or MSISDN</li>
<li>PAC code from LoopDL</li>
<li>MSISDN active during porting process</li>
</ul>

<h3>What to do next</h3>

<ol>
<li>Check for outstanding balance</li>
<li>If balance exists and customer insists, TL discretion to credit</li>
<li>If number was previously ported in, PAC is provided by TL/SIM GO</li>
<li>If native LoopDL eSIM, customer can obtain PAC via website, app or SMS 65075</li>
<li>Confirm PAC and expiry with customer</li>
<li>Advise service ends on cutover</li>
</ol>

<div class="warning-box">
<ul>
<li>Porting should complete within 48 business hours.</li>
<li>Weekends and holidays are excluded.</li>
</ul>
</div>
`
}
},
logistics:{
"Where Is My Delivery":{
title:"Logistics - Where Is My Delivery",
content:`
<h3>Things we check</h3>
<p><em>ask the customer, check in the station, etc.</em></p>

<ul>
<li>Order date</li>
<li>Tracking URL</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Verify if the delivery address on the system is correct</li>
</ul>

<div class="warning-box">
<ul>
<li>If the address is not correct, follow Change of Address process.</li>
</ul>
</div>
`
},

"Change of Address":{
title:"Logistics - Change of Address",
content:`
<h3>Things we check</h3>

<ul>
<li>Order status</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Change delivery address if eligible</li>
</ul>

<div class="warning-box">
<ul>
<li>Dispatched – address can no longer be changed.</li>
<li>Other statuses – address can be updated.</li>
</ul>
</div>
`
},

"Failed Delivery":{
title:"Logistics - Failed Delivery",
content:`
<h3>Things we check</h3>

<ul>
<li>Verify delivery address</li>
</ul>

<div class="warning-box">
<ul>
<li>If the address is not correct, follow Change of Address process.</li>
</ul>
</div>
`
},

"Returns":{
title:"Logistics - Returns",
content:`
<h3>Things we check</h3>

<ul>
<li>Verify if services are cancelled</li>
<li>Ask for reason of Loop return</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Escalate to UK Support internally</li>
</ul>
`
},

"Replacements":{
title:"Logistics - Replacements",
content:`
<h3>Things we check</h3>

<ul>
<li>Reason for replacement</li>
<li>Verify issue</li>
<li>Verify if replacement is valid</li>
<li>Customer-induced damage (not valid)</li>
<li>Issue upon delivery (valid)</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Verify delivery address</li>
<li>Escalate to support</li>
</ul>
`
},

"Fast Delivery Request":{
title:"Logistics - Fast Delivery Request",
content:`
<h3>Things we check</h3>

<ul>
<li>Order Date</li>
<li>Order Status</li>
<li>Tracking URL</li>
</ul>

<h3>What to do next</h3>

<ul>
<li>Verify delivery address</li>
<li>Escalate to support</li>
</ul>
`
}
},
device:{
"Not Charging":{
title:"Device - Not Charging",
content:`
<h3>Issue: Not Charging</h3>

<h4>Ask checklist / Troubleshooting</h4>
<ul>
<li>Connect to different power outlets inside the house</li>
<li>Make sure the power cords are connected properly</li>
<li>Check physical condition of power cord</li>
<li>Use different power cords</li>
<li>Check for physical damage or deterioration of the Loop</li>
</ul>

<div class="warning-box">
<ul>
<li>If Loop still does not charge after troubleshooting, escalate to support.</li>
<li>If device arrived faulty, proceed to Logistics → Replacements.</li>
</ul>
</div>
`
},

"Fast Battery Drain":{
title:"Device - Fast Battery Drain",
content:`
<h3>Issue: Fast Battery Drain</h3>

<h4>Ask checklist / Troubleshooting</h4>
<ul>
<li>Battery saver is turned off</li>
<li>Battery calibration completed</li>
<li>Tried a different power cable</li>
<li>Tried a different power outlet</li>
<li>Performed factory reset</li>
<li>Observe for 24 hours</li>
</ul>

<div class="warning-box">
<ul>
<li>If issue persists, escalate to support.</li>
<li>If device arrived faulty, proceed to Logistics → Replacements.</li>
</ul>
</div>
`
},

"No Sound / Crashing / Constant Reboot":{
title:"Device - No Sound / Crashing / Constant Reboot",
content:`
<h3>Issue: No Sound / Crashing / Constant Reboot</h3>

<h4>Ask checklist / Troubleshooting</h4>
<ul>
<li>Reboot device</li>
<li>Factory reset</li>
</ul>

<h4>Factory Reset Steps</h4>
<ol>
<li>Turn on Loop device</li>
<li>Open Settings</li>
<li>Navigate to System → Reset Options</li>
<li>Select Erase All Data (Factory Reset)</li>
<li>Confirm action</li>
</ol>

<h4>If Device Is Unresponsive</h4>
<ol>
<li>Power off device</li>
<li>Hold Power + Volume Up</li>
<li>Navigate to Wipe Data / Factory Reset</li>
<li>Confirm reset</li>
<li>Select Reboot System Now</li>
</ol>

<div class="warning-box">
<ul>
<li>Factory reset erases all stored data and settings.</li>
<li>If issue persists, escalate to support.</li>
<li>If device arrived faulty, proceed to Logistics → Replacements.</li>
</ul>
</div>
`
},

"Application Issue":{
title:"Device - Application Issue",
content:`
<h3>Issue: Application Issue</h3>

<h4>Ask checklist / Troubleshooting</h4>
<ul>
<li>Uninstall / Install application</li>
<li>Reboot device</li>
<li>Factory Reset</li>
</ul>

<div class="warning-box">
<ul>
<li>If issue persists, escalate to support.</li>
<li>If device arrived faulty, proceed to Logistics → Replacements.</li>
</ul>
</div>
`
}
},
cancel:{
"Cancellation Reasons":{
title:"Cancel - Cancellation Reasons",
content:`
<h3>Affordability / Better Deal / Change of Heart</h3>
<ul>
<li>Process scheduled cancellation</li>
</ul>

<h3>Network / Coverage</h3>
<ol>
<li>Run Speed Test</li>
<li>Troubleshoot including restart and hard reset</li>
<li>If issue resolved, attempt retention</li>
<li>If issue persists and customer insists, process scheduled cancellation</li>
</ol>

<h3>Incompatibility</h3>
<ol>
<li>Check phone make and model</li>
<li>Check compatibility</li>
<li>If compatible, follow Activation process</li>
<li>If incompatible, attempt retention on another phone</li>
<li>If declined, process scheduled cancellation</li>
</ol>
`
},

"No Reason Stated":{
title:"Cancel - No Reason Stated",
content:`
<ul>
<li>Call the customer and ask for cancellation reason</li>
<li>Refer to cancellation reasons guide</li>
</ul>
`
}
},
misc:{
"No Issue Stated":{
title:"No Issue - No Issue Stated on Ticket",
content:`
<ul>
<li>Customer requests email communication only</li>
<li>Make one call attempt</li>
<li>If unanswered, escalate to Support</li>
<li>If concern is identified, follow relevant process guide</li>
</ul>
`
},

"DNC (Do Not Call)":{
title:"DNC - Do Not Call",
content:`
<h3>UK Customers</h3>
<ul>
<li>Check AI LoopDL interaction</li>
<li>Call customer once</li>
<li>If cooperative, resolve issue</li>
<li>If not cooperative, escalate</li>
<li>If unanswered, escalate for email communication</li>
</ul>

<h3>Non-UK Customers</h3>
<ul>
<li>Check AI LoopDL interaction</li>
<li>Call customer once</li>
<li>Advise we only cater UK customers</li>
<li>Schedule cancellation if needed</li>
<li>If unanswered, escalate for email communication</li>
</ul>
`
},

"Onboarding Process":{
title:"Onboarding Process",
content:`
<ol>
<li>Run speed test and optimization in theStation</li>
<li>Check customer experience</li>
<li>Verify connection speed with customer</li>
<li>Get customer feedback</li>
<li>Confirm satisfaction and overall experience</li>
<li>Move to healthy</li>
</ol>
`
}
},
};

let currentCategory="";
function loadCategory(category){
 currentCategory=category;
 const list=document.getElementById('articleList');
 list.innerHTML='';
 Object.keys(knowledge[category]).forEach(article=>{
  const btn=document.createElement('button');
  btn.className='article-item';
  btn.textContent=article;
  btn.onclick=()=>openArticle(category,article);
  list.appendChild(btn);
 });
}
function openArticle(category,article){
 document.getElementById('articleTitle').innerText=knowledge[category][article].title;
 document.getElementById('articleContent').innerHTML=knowledge[category][article].content;
}
function searchArticles(){
 const term=document.getElementById('searchBox').value.toLowerCase();
 const list=document.getElementById('articleList');
 list.innerHTML='';
 Object.keys(knowledge).forEach(cat=>{
  Object.keys(knowledge[cat]).forEach(article=>{
   if(article.toLowerCase().includes(term)){
    const btn=document.createElement('button');
    btn.className='article-item';
    btn.textContent=article;
    btn.onclick=()=>openArticle(cat,article);
    list.appendChild(btn);
   }
  });
 });
}
