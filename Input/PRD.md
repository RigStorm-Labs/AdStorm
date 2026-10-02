============================================================
ADSTORM — PRODUCT REQUIREMENTS DOCUMENT
VERSION 1.0
============================================================

01. PRODUCT SUMMARY
------------------------------------------------------------

AdStorm is a digital marketing service platform operated under
RigStorm Group of Companies.

Its purpose is to allow a business owner to:

1. Understand what AdStorm does.
2. Select a suitable marketing package.
3. Explain their business and goals.
4. Submit a Growth Brief.
5. Have AdStorm evaluate the business.
6. Receive a marketing strategy / campaign plan.
7. Have AdStorm execute the agreed services.

The website is primarily a customer acquisition and onboarding
system.

It is NOT an ad-tech platform.


02. PRIMARY CUSTOMER
------------------------------------------------------------

Primary audience:

Small businesses
Local businesses
New businesses
Service businesses
Independent businesses
Businesses with weak/no social presence
Businesses that need structured digital marketing

Typical customer problem:

"I have a business, but I don't know how to market it properly."


03. CORE VALUE PROPOSITION
------------------------------------------------------------

Primary:

"Your business. Marketed smarter."

Supporting concept:

AdStorm turns a business's marketing budget into a coordinated
growth campaign instead of forcing the customer to figure out
every platform and marketing decision themselves.


04. CUSTOMER PSYCHOLOGY
------------------------------------------------------------

Use Rory Sutherland-inspired principles:

1. Sell the outcome, not the mechanism.

Do not lead with:
"₹1,500 Meta + Google Ads."

Lead with:
"A coordinated campaign designed around your business."

2. Reduce perceived complexity.

Customer should not need to understand:
CPM
CPC
ROAS
CTR
Audience targeting
Ad Manager
Campaign structures

AdStorm handles that complexity.

3. Increase perceived value through bundling.

Instead of selling isolated services:

Instagram setup
Ads
Advice
Content
Strategy

Package them into a coherent growth system.

4. Make the customer feel understood.

The Growth Brief exists to communicate:

"We don't give every business the same campaign."

5. Use signaling.

The website should look organized, deliberate and professional.

6. Reduce uncertainty.

Explain:

What happens after submission
What AdStorm does
What the customer receives
What the budget covers
What the customer is responsible for
How communication works

7. Do not promise guaranteed outcomes.

Marketing performance depends on market,
offer, creative, audience, competition and budget.

Use language such as:

"Designed to improve visibility."

"Built around your goals."

"Strategically optimized."

Never:
"Guaranteed sales."


05. CUSTOMER JOURNEY
------------------------------------------------------------

DISCOVER
↓
Understand AdStorm
↓
Explore Packages
↓
Choose a direction
↓
Start Growth Brief
↓
Submit Business Information
↓
AdStorm reviews request
↓
AdStorm contacts customer
↓
Strategy agreed
↓
Campaign begins
↓
Execution + optimization
↓
Reporting / communication
↓
Renewal / next campaign


06. WEBSITE INFORMATION ARCHITECTURE
------------------------------------------------------------

HOME
│
├── What AdStorm Does
├── Why AdStorm
├── How It Works
├── Packages
├── What You Get
├── Who It's For
├── FAQ
└── Start Your Growth Brief

HOW IT WORKS
│
├── Tell Us About Your Business
├── We Build Your Strategy
├── We Execute
└── We Optimize

PACKAGES
│
├── Package comparison
├── Included services
├── Budget explanation
├── FAQs
└── Start Growth Brief

ABOUT
│
├── AdStorm
├── RigStorm Group
└── Philosophy

GET STARTED
│
└── Growth Brief

CONTACT
│
├── General Contact
└── Support


07. HOMEPAGE STRUCTURE
------------------------------------------------------------

SECTION 1 — HERO

Objective:
Immediately explain AdStorm.

Suggested positioning:

"Your business.
Marketed smarter."

Supporting copy:

"AdStorm builds and manages digital marketing campaigns
around your business, your audience and your goals."

Primary CTA:
Start Your Growth Brief →

Secondary CTA:
Explore Packages


SECTION 2 — PROBLEM

"Marketing shouldn't feel like another business to run."

Explain the complexity of managing:
Social media
Advertising
Creative
Strategy
Audience
Platforms


SECTION 3 — SOLUTION

"One strategy. Multiple channels. One team."

Show that AdStorm coordinates the marketing activity.


SECTION 4 — HOW IT WORKS

01
Tell us about your business.

02
We build the marketing approach.

03
We put the campaign into motion.

04
We optimize as we learn.


SECTION 5 — SERVICES

Possible services:

Social media setup
Social media strategy
Content direction
Marketing consultation
Google Ads
Meta Ads
Campaign optimization
Local visibility
Profile optimization
Creative direction
Marketing planning


SECTION 6 — PACKAGES

Show 3–4 clear packages.

Avoid overwhelming users.


SECTION 7 — WHY ADSTORM

Focus on:

Business-specific strategy
Managed execution
Budget-conscious planning
Multiple marketing channels
Human guidance
Clear communication


SECTION 8 — WHO IT'S FOR

Examples:

Local businesses
New businesses
Service businesses
Growing businesses
Businesses starting digital marketing


SECTION 9 — FAQ

Answer major objections.

Examples:

"Do I need an existing Instagram account?"

"What happens after I submit the Growth Brief?"

"Do I choose where my advertising budget goes?"

"Does AdStorm guarantee results?"

"Can I start with a small budget?"

"What platforms do you use?"


SECTION 10 — FINAL CTA

"Ready to put your business in motion?"

CTA:
Start Your Growth Brief →


08. GROWTH BRIEF
------------------------------------------------------------

Form name:

AdStorm — Growth Brief

Form endpoint:

https://formspree.io/f/mjykqywn


FORM SECTION A — CONTACT

Full Name *
Email *
Phone / WhatsApp *
Preferred contact method *


FORM SECTION B — BUSINESS

Business Name *
Business Type *
Business Description *
Location *
Website URL
Instagram URL
Facebook URL
Other social profile


FORM SECTION C — BUSINESS OFFER

What do you sell?
What services/products do you offer?
What makes your business different?
Primary service/product
Approximate price range


FORM SECTION D — CURRENT PRESENCE

Do you currently have:

Instagram
Facebook
Google Business Profile
Website
Other

Current marketing activity:

None
Occasional
Regular
Active paid advertising


FORM SECTION E — GOALS

Primary marketing goal:

Build online presence
Get more enquiries
Get more customers
Increase local visibility
Promote a product/service
Launch a new business
Improve social media
Other

Secondary goal:
Optional


FORM SECTION F — AUDIENCE

Who are your ideal customers?

Age range:
Optional

Location:
Optional

Customer type:
Optional

Anything else we should know?


FORM SECTION G — MARKETING INTEREST

What are you interested in?

Social Media Marketing
Instagram Growth
Facebook Marketing
Google Ads
Meta Ads
Content Strategy
Business Profile Setup
Marketing Advice
Local Marketing
Full Marketing Campaign
Not Sure


FORM SECTION H — PACKAGE / BUDGET

Preferred package:
Optional

Approximate monthly/campaign budget:

₹1,000–₹2,500
₹2,500–₹5,000
₹5,000–₹10,000
₹10,000+
Not sure yet


FORM SECTION I — ADDITIONAL INFORMATION

Tell us anything else about your business,
your current marketing situation or what you want to achieve.


FORM SECTION J — CONSENT

Checkbox:

"I confirm that the information provided is accurate and
I agree to be contacted by AdStorm regarding my marketing
request."

Required.


09. FORM UX REQUIREMENTS
------------------------------------------------------------

The form must NOT appear as one enormous wall of inputs.

Use logical sections.

Desktop:
Two-column layout where appropriate.

Mobile:
Single column.

Show progress if the form becomes lengthy.

Required fields:
Only fields genuinely required for strategy.

Use:
required
type=email
type=url
appropriate input types

Use client-side JS only for UX validation.

Formspree remains the submission backend.

Submission must never expose private API keys.

Do not store customer data in localStorage.

Do not put sensitive customer information into URL parameters.


10. FORM SUBMISSION
------------------------------------------------------------

HTML:

<form
  action="https://formspree.io/f/mjykqywn"
  method="POST"
>

Every field must have a name attribute.

Example:

<input
  type="text"
  name="business_name"
  required
>

Use a hidden subject field:

<input
  type="hidden"
  name="_subject"
  value="New AdStorm Growth Brief"
>


11. SUCCESS EXPERIENCE
------------------------------------------------------------

After successful submission:

Show a dedicated success state.

Headline:

"Your Growth Brief is in."

Message:

"We've received your business information.
AdStorm will review your brief and contact you using
the details you provided."

CTA:

Back to AdStorm

Do NOT falsely say:

"Your campaign has started."

Because submission ≠ campaign approval.


12. ERROR EXPERIENCE
------------------------------------------------------------

If submission fails:

"Something went wrong while sending your brief."

Provide:

Try Again

and:

Contact Support

Support:
support.rigstorm@gmail.com


13. PACKAGE ARCHITECTURE
------------------------------------------------------------

AdStorm should initially have 3 core tiers.

Tier 1:
Presence

Purpose:
Establish a professional digital presence.

Includes:
- Social profile setup/optimization
- Basic marketing strategy
- Profile positioning
- Basic content direction
- Business visibility recommendations
- Marketing consultation


Tier 2:
Growth

Purpose:
Build visibility and generate more opportunities.

Includes everything in Presence, plus:
- Social media marketing
- Content planning
- Campaign strategy
- Paid advertising allocation
- Google/Meta campaign setup where appropriate
- Campaign monitoring
- Optimization
- Regular updates


Tier 3:
Momentum

Purpose:
Run a broader managed marketing campaign.

Includes everything in Growth, plus:
- Multi-channel marketing
- Advanced campaign planning
- Greater advertising allocation
- Ongoing optimization
- Creative direction
- Strategic consultation
- Performance reporting
- Campaign iteration


Important:

Package prices and advertising allocations must be defined
after calculating actual AdStorm delivery costs and desired
margin.

Never publish economics that make the business unsustainable.


14. CUSTOMER-FACING ECONOMICS
------------------------------------------------------------

Do NOT show:

Customer pays ₹5,000
AdStorm profit ₹3,500
Ads ₹1,500

Instead show:

Campaign investment:
₹5,000

Includes:

Strategy
Marketing execution
Creative direction
Platform management
Advertising allocation
Optimization
Reporting

AdStorm internally determines the allocation.

The website must clearly state that advertising spend,
service scope and platform allocation depend on the selected
package and approved campaign plan.


15. PACKAGE NAMING SYSTEM
------------------------------------------------------------

The final package names should be selected after brand testing.

Potential naming direction A:

Presence
Growth
Momentum

Potential naming direction B:

Launch
Grow
Scale

Potential naming direction C:

Spark
Surge
Storm

Potential naming direction D:

Foundation
Acceleration
Expansion

Potential naming direction E:

Start
Advance
Amplify

Naming principle:

Names should communicate progression without sounding
like arbitrary SaaS tiers.


16. ADMIN / INTERNAL WORKFLOW
------------------------------------------------------------

Customer submits Growth Brief
↓
Formspree receives submission
↓
AdStorm reviews business
↓
Classify customer
↓
Assess needs
↓
Select recommended package
↓
Prepare marketing strategy
↓
Contact customer
↓
Confirm scope + budget
↓
Campaign setup
↓
Execution
↓
Monitoring
↓
Optimization
↓
Reporting
↓
Renewal / next campaign


17. INTERNAL CUSTOMER CLASSIFICATION
------------------------------------------------------------

Every submitted lead should be classified internally:

NEW
QUALIFIED
NEEDS REVIEW
CONTACTED
PROPOSAL
APPROVED
ACTIVE
PAUSED
COMPLETED
RENEWAL


18. REPORTING
------------------------------------------------------------

v1 does NOT require a customer dashboard.

Reports can initially be delivered manually.

Report may contain:

Campaign period
Budget
Channels used
Activities completed
Reach
Impressions
Clicks
Enquiries/leads where measurable
Content produced
Key observations
Next actions

Never fabricate performance metrics.

If a metric is unavailable:
Say so.


19. CUSTOMER EXPECTATIONS
------------------------------------------------------------

AdStorm must clearly communicate:

Marketing results vary.

Results depend on:
- Market
- Offer
- Audience
- Competition
- Creative
- Budget
- Platform
- Customer responsiveness

No guaranteed:
Sales
Followers
Leads
Revenue
ROI

unless legally/operationally justified and genuinely controllable.


20. CONTACT ARCHITECTURE
------------------------------------------------------------

General Contact:

rigstormlabs@gmail.com

Support:

support.rigstorm@gmail.com

Growth Brief:
Formspree endpoint

https://formspree.io/f/mjykqywn


21. STATIC WEBSITE FILE STRUCTURE
------------------------------------------------------------

/adstorm
│
├── index.html
├── how-it-works.html
├── packages.html
├── about.html
├── contact.html
├── growth-brief.html
│
├── /assets
│   ├── /images
│   ├── /icons
│   └── /logos
│
├── /css
│   └── custom.css
│
├── /js
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   └── form.js
│
├── robots.txt
├── sitemap.xml
└── 404.html


22. JAVASCRIPT RULES
------------------------------------------------------------

Vanilla JavaScript only.

Use JS for:

Navigation
Mobile menu
FAQ accordion
Form UX
Validation
Scroll interactions
Animations
Progress indicators
Package interactions

Do NOT use JS for things HTML/CSS can do naturally.

Do NOT create unnecessary application architecture.


23. SECURITY / PRIVACY
------------------------------------------------------------

No backend credentials in frontend.

No API keys.

No customer data in source code.

No customer data in localStorage.

No unnecessary analytics scripts.

Formspree endpoint may be public because it is the form
submission destination.

Do not expose Formspree account credentials or private API keys.

If analytics are added later, ensure privacy/legal requirements
are handled before deployment.


24. SEO
------------------------------------------------------------

Homepage title:

AdStorm — Digital Marketing for Growing Businesses

Meta description:

AdStorm helps businesses build their digital presence,
reach the right audience and run smarter marketing campaigns.

Suggested URL structure:

/
 /how-it-works
 /packages
 /about
 /growth-brief
 /contact


25. 404 PAGE
------------------------------------------------------------

Headline:

"Looks like this page got caught in the storm."

Supporting text:

"The page you're looking for doesn't exist or has moved."

CTA:
Back to AdStorm


26. EMPTY / EDGE STATES
------------------------------------------------------------

Must account for:

Form submission failure
Invalid email
Missing required field
Invalid URL
Very long business description
Mobile keyboard interaction
Slow connection
JavaScript disabled
404 page
Broken image
No package selected
Customer unsure of budget
Customer unsure of marketing goal

The website must remain usable without JavaScript
for core navigation and basic form submission.


27. ANALYTICS — FUTURE
------------------------------------------------------------

Not required for v1.

Possible future events:

growth_brief_started
growth_brief_completed
package_viewed
package_selected
cta_clicked
contact_clicked

Do not add analytics merely for decoration.


28. V1 SUCCESS CRITERIA
------------------------------------------------------------

AdStorm v1 is considered complete when:

[ ] Visitor understands AdStorm within 5 seconds
[ ] AdStorm is clearly a marketing service
[ ] No confusion with an ad marketplace
[ ] No confusion with RigStorm ad revenue
[ ] Packages are understandable
[ ] Customer can start a Growth Brief immediately
[ ] Form submits successfully to Formspree
[ ] Success state works
[ ] Error state works
[ ] Contact email works
[ ] Support email works
[ ] Mobile experience is polished
[ ] Desktop experience is polished
[ ] SEO metadata exists
[ ] 404 page exists
[ ] robots.txt exists
[ ] sitemap.xml exists
[ ] Accessibility basics are covered
[ ] No exposed credentials
[ ] No unnecessary framework
[ ] GitHub Pages deployment works
[ ] No backend required
[ ] No false marketing promises
[ ] All customer-facing claims are supportable


29. CORE PRODUCT PRINCIPLE
------------------------------------------------------------

AdStorm does not sell advertisements.

AdStorm sells:

CLARITY
+
STRATEGY
+
EXECUTION
+
OPTIMIZATION

Advertising is one of the tools used to deliver that service.

The customer should leave the website thinking:

"I don't need to figure out digital marketing alone.
AdStorm can handle it."
============================================================
END OF PRD
============================================================