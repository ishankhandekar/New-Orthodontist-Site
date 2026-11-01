/*
	The patient info pages' text as it was in the code before Sanity, used once to create their
	documents. After seeding, Sanity is the source of truth; this is only a record.
	{phone} and {count} are filled in by the site (the practice's phone number, the number of questions).
*/

export const patientInfoPages = [
	{
		"_id": "page-first-visit",
		"_type": "firstVisitPage",
		"seo": {
			"title": "Your First Visit | Torrey Hills Orthodontics",
			"description": "What to expect at your free orthodontic consultation with Dr. Judy Lee in Carmel Valley: about an hour, a 3D scan, your plan, and your quote."
		},
		"headline": "Your first visit, start to finish.",
		"intro": "Here's exactly what happens at your free consultation, minute by minute, so you can walk in knowing what to expect.",
		"facts": [
			{
				"_type": "fact",
				"_key": "fact1",
				"label": "Length",
				"value": "About an hour"
			},
			{
				"_type": "fact",
				"_key": "fact2",
				"label": "Cost",
				"value": "Free"
			},
			{
				"_type": "fact",
				"_key": "fact3",
				"label": "You'll see",
				"value": "Dr. Lee herself"
			},
			{
				"_type": "fact",
				"_key": "fact4",
				"label": "You'll leave with",
				"value": "A written plan and quote"
			}
		],
		"itineraryHeading": "The visit, minute by minute.",
		"itinerary": [
			{
				"_type": "stop",
				"_key": "stop1",
				"time": "0:00",
				"title": "Welcome",
				"body": "A friendly hello and a seat. Your forms are already done, so there's nothing to fill out."
			},
			{
				"_type": "stop",
				"_key": "stop2",
				"time": "0:05",
				"title": "Photos and 3D scan",
				"body": "A few quick photos and a 3D scan of your teeth. No messy impressions, nothing uncomfortable."
			},
			{
				"_type": "stop",
				"_key": "stop3",
				"time": "0:20",
				"title": "Time with Dr. Lee",
				"body": "Dr. Lee examines your teeth, bite, and jaw herself, and asks what you would like to change."
			},
			{
				"_type": "stop",
				"_key": "stop4",
				"time": "0:35",
				"title": "Your plan",
				"body": "She walks you through what she sees, your options, and a preview of how your smile could look."
			},
			{
				"_type": "stop",
				"_key": "stop5",
				"time": "0:45",
				"title": "The numbers",
				"body": "Your all-inclusive quote, what insurance covers, and the monthly payment options."
			},
			{
				"_type": "stop",
				"_key": "stop6",
				"time": "0:55",
				"title": "Your call",
				"body": "Ask anything. Then book your start date, or take time to think it over. No pressure either way."
			}
		],
		"checklistHeading": "Before you come.",
		"checklistIntro": "A few things to bring, so the visit is all about you, not paperwork. Tick them off as you go.",
		"checklist": [
			{
				"_type": "checklistItem",
				"_key": "check1",
				"item": "Fill out your forms online",
				"note": "We'll text you a link after you book."
			},
			{
				"_type": "checklistItem",
				"_key": "check2",
				"item": "Your insurance card",
				"note": "So we can check your benefits on the spot."
			},
			{
				"_type": "checklistItem",
				"_key": "check3",
				"item": "A photo ID",
				"note": "For you, or the parent if the visit is for a child."
			},
			{
				"_type": "checklistItem",
				"_key": "check4",
				"item": "A list of medications",
				"note": "Including anything taken regularly."
			},
			{
				"_type": "checklistItem",
				"_key": "check5",
				"item": "Your dentist's name",
				"note": "So we can keep them in the loop."
			},
			{
				"_type": "checklistItem",
				"_key": "check6",
				"item": "Your questions",
				"note": "Nothing is too small to ask."
			}
		],
		"insideHeading": "A look inside.",
		"insideCaptions": [
			"A calm, bright space",
			"Dr. Lee, at every visit",
			"Real patients, real smiles"
		],
		"leaveHeading": "What you'll leave with.",
		"leaveIntro": "No pressure to decide that day.",
		"takeaways": [
			{
				"_type": "item",
				"_key": "takeaway1",
				"title": "A preview of your new smile",
				"body": "See how your teeth could move, before anything begins."
			},
			{
				"_type": "item",
				"_key": "takeaway2",
				"title": "A written treatment plan",
				"body": "Your options, timeline, and what each one involves."
			},
			{
				"_type": "item",
				"_key": "takeaway3",
				"title": "An all-inclusive quote",
				"body": "One clear price, with nothing added later."
			},
			{
				"_type": "item",
				"_key": "takeaway4",
				"title": "An insurance estimate",
				"body": "What your plan covers, and what your share would be."
			}
		],
		"childHeading": "Bringing your child?",
		"childIntro": "Many first visits are for kids around age 7. We keep it short, friendly, and easy.",
		"childNotes": [
			"You stay in the room the whole time.",
			"No needles, no shots, nothing that hurts.",
			"Dr. Lee explains everything in kid-friendly terms."
		],
		"hereHeading": "Getting here.",
		"details": [
			{
				"_type": "fact",
				"_key": "detail1",
				"label": "Parking",
				"value": "Free parking in the building lot"
			},
			{
				"_type": "fact",
				"_key": "detail2",
				"label": "Finding us",
				"value": "Suite 200, on the second floor. The elevator is just inside the lobby."
			}
		],
		"faqHeading": "First visit questions.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faq1",
				"q": "Do I need a referral from my dentist?",
				"a": "No. You can book your free consultation directly, and we are happy to work alongside your dentist."
			},
			{
				"_type": "faqItem",
				"_key": "faq2",
				"q": "Is there any obligation to start treatment?",
				"a": "None at all. You leave with your plan and quote, and you decide when, or whether, to begin."
			},
			{
				"_type": "faqItem",
				"_key": "faq3",
				"q": "Will you take X-rays?",
				"a": "If Dr. Lee needs them to plan treatment, we take them during the visit. It is quick and low-dose."
			},
			{
				"_type": "faqItem",
				"_key": "faq4",
				"q": "Can I bring someone with me?",
				"a": "Of course. Parents, partners, and family are always welcome to sit in."
			},
			{
				"_type": "faqItem",
				"_key": "faq5",
				"q": "What if I need to reschedule?",
				"a": "Just call us. We will find a new time that works for you."
			}
		],
		"closing": "Ready for your first visit?",
		"closingText": "It's free, it takes about an hour, and you'll leave knowing exactly what's possible."
	},
	{
		"_id": "page-financing",
		"_type": "financingPage",
		"seo": {
			"title": "Financial & Insurance | Torrey Hills Orthodontics",
			"description": "Clear, all-inclusive orthodontic pricing in Carmel Valley: one quote, 0% interest payment plans, and insurance handled for you. Try the payment calculator."
		},
		"headlineLines": [
			"Clear costs.",
			"No surprises."
		],
		"intro": "You'll know exactly what treatment costs, what insurance covers, and what you'll pay each month, before anything begins.",
		"promises": [
			{
				"_type": "item",
				"_key": "promise1",
				"title": "One all-inclusive quote",
				"body": "The price we quote is the price you pay, even if treatment takes longer."
			},
			{
				"_type": "item",
				"_key": "promise2",
				"title": "0% interest payment plans",
				"body": "Spread payments across your treatment with no interest and no hidden fees."
			},
			{
				"_type": "item",
				"_key": "promise3",
				"title": "Insurance, handled",
				"body": "We check your benefits, file the claims, and track the payments for you."
			}
		],
		"includedHeading": "What your quote includes.",
		"includedIntro": "One price covers your whole treatment, from the first scan to your first retainers.",
		"included": [
			{
				"_type": "receiptLine",
				"_key": "line1",
				"item": "Consultation and 3D scan",
				"value": "Free"
			},
			{
				"_type": "receiptLine",
				"_key": "line2",
				"item": "Your custom treatment plan",
				"value": "Included"
			},
			{
				"_type": "receiptLine",
				"_key": "line3",
				"item": "Braces or aligners",
				"value": "Included"
			},
			{
				"_type": "receiptLine",
				"_key": "line4",
				"item": "Every adjustment visit",
				"value": "Included"
			},
			{
				"_type": "receiptLine",
				"_key": "line5",
				"item": "Emergency visits during treatment",
				"value": "Included"
			},
			{
				"_type": "receiptLine",
				"_key": "line6",
				"item": "Your first set of retainers",
				"value": "Included"
			},
			{
				"_type": "receiptLine",
				"_key": "line7",
				"item": "Retainer check-ins for the first year",
				"value": "Included"
			}
		],
		"surpriseLabel": "Surprise fees",
		"surpriseValue": "$0",
		"notIncluded": "Not included: replacement retainers or appliances that are lost or broken. We'll always tell you the price before we make anything.",
		"calcHeading": "See what monthly payments could look like.",
		"calcIntro": "Move the sliders to see how a 0% interest plan breaks down. Your exact numbers come with your quote.",
		"calcDisclaimer": "An example only, not a quote. Your price depends on your treatment and is confirmed in writing at your free consultation.",
		"insuranceHeading": "We handle the insurance paperwork.",
		"insuranceIntro": "We work with most major PPO plans. You don't need to call your insurer or fill out a single form.",
		"insuranceSteps": [
			{
				"_type": "insuranceStep",
				"_key": "step1",
				"label": "Before treatment",
				"title": "We check your benefits",
				"body": "Share your plan details and we'll confirm your orthodontic coverage, so your quote shows your real share."
			},
			{
				"_type": "insuranceStep",
				"_key": "step2",
				"label": "During treatment",
				"title": "We file the claims",
				"body": "We submit the paperwork and follow up with your insurer. Most pay their share in installments."
			},
			{
				"_type": "insuranceStep",
				"_key": "step3",
				"label": "Your share",
				"title": "You pay only the rest",
				"body": "Whatever insurance does not cover can go on a 0% interest monthly plan."
			}
		],
		"termsHeading": "Insurance terms, in plain English.",
		"glossary": [
			{
				"_type": "term",
				"_key": "term1",
				"term": "Orthodontic benefit",
				"def": "The part of a dental plan that covers braces or aligners. Not every plan includes one."
			},
			{
				"_type": "term",
				"_key": "term2",
				"term": "Lifetime maximum",
				"def": "The most your plan will ever pay toward orthodontics. It is usually separate from your regular dental maximum."
			},
			{
				"_type": "term",
				"_key": "term3",
				"term": "Coinsurance",
				"def": "Your plan's share of the cost, often around half for orthodontics, up to the lifetime maximum."
			},
			{
				"_type": "term",
				"_key": "term4",
				"term": "Age limit",
				"def": "Some plans only cover orthodontics for children under a certain age, often 19."
			},
			{
				"_type": "term",
				"_key": "term5",
				"term": "Deductible",
				"def": "What you pay before insurance starts paying. Many plans do not apply one to orthodontics."
			},
			{
				"_type": "term",
				"_key": "term6",
				"term": "Installment payments",
				"def": "Insurers often pay their share over the course of treatment rather than all at once."
			}
		],
		"payHeading": "Every way to pay.",
		"waysToPay": [
			{
				"_type": "fact",
				"_key": "way1",
				"label": "Monthly plans",
				"value": "0% interest"
			},
			{
				"_type": "fact",
				"_key": "way2",
				"label": "Pay in full",
				"value": "Ask about savings"
			},
			{
				"_type": "fact",
				"_key": "way3",
				"label": "HSA and FSA",
				"value": "Accepted"
			},
			{
				"_type": "fact",
				"_key": "way4",
				"label": "Cards",
				"value": "All major cards"
			}
		],
		"faqHeading": "Money questions, answered.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faq1",
				"q": "Is the first consultation really free?",
				"a": "Yes. The scan, the sit-down with Dr. Lee, and your written quote cost nothing, with no obligation to start."
			},
			{
				"_type": "faqItem",
				"_key": "faq2",
				"q": "Will my price change if treatment takes longer?",
				"a": "No. Your quote is all-inclusive. If treatment runs longer than planned, the extra visits are on us."
			},
			{
				"_type": "faqItem",
				"_key": "faq3",
				"q": "Do your payment plans charge interest?",
				"a": "No. Our in-house plans are 0% interest, with no hidden fees. You will see the exact monthly amount before you sign."
			},
			{
				"_type": "faqItem",
				"_key": "faq4",
				"q": "Can I use my HSA or FSA?",
				"a": "Yes. Orthodontic treatment is generally a qualified medical expense, and we can provide the receipts you need."
			},
			{
				"_type": "faqItem",
				"_key": "faq5",
				"q": "What if my insurance doesn't cover orthodontics?",
				"a": "Many patients start without coverage. A 0% interest monthly plan spreads the cost across treatment."
			}
		],
		"closing": "Get your exact numbers.",
		"closingText": "Your free consultation ends with a written, all-inclusive quote and an insurance estimate, so you can decide with everything in front of you."
	},
	{
		"_id": "page-faq",
		"_type": "faqPage",
		"seo": {
			"title": "FAQ | Torrey Hills Orthodontics",
			"description": "Answers to common questions about braces, Invisalign, costs, insurance, kids' orthodontics, and retainers from Torrey Hills Orthodontics in Carmel Valley."
		},
		"headline": "Questions, answered.",
		"intro": "{count} answers to the questions patients ask us most. Can't find yours? Call us at {phone}.",
		"groups": [
			{
				"_type": "faqGroup",
				"_key": "group1",
				"id": "getting-started",
				"title": "Getting started",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "getting-started-1",
						"q": "Is the first consultation really free?",
						"a": "Yes. Your first visit, including the 3D scan, an exam with Dr. Lee, and your written quote, costs nothing and comes with no obligation."
					},
					{
						"_type": "faqItem",
						"_key": "getting-started-2",
						"q": "Do I need a referral from my dentist?",
						"a": "No. You can book directly. We are happy to work alongside your family dentist and keep them updated."
					},
					{
						"_type": "faqItem",
						"_key": "getting-started-3",
						"q": "How long does the first visit take?",
						"a": "About an hour. That covers photos, the scan, time with Dr. Lee, your plan, and your costs."
					},
					{
						"_type": "faqItem",
						"_key": "getting-started-4",
						"q": "What should I bring to my first visit?",
						"a": "Your insurance card, a photo ID, a list of any medications, and your dentist’s name. We’ll send your forms ahead of time so you can fill them out online."
					},
					{
						"_type": "faqItem",
						"_key": "getting-started-5",
						"q": "Will I see Dr. Lee at my first visit?",
						"a": "Yes. Dr. Lee examines every new patient herself and walks you through your options."
					},
					{
						"_type": "faqItem",
						"_key": "getting-started-6",
						"q": "Is there any pressure to start treatment?",
						"a": "None. You leave with your plan and quote, and you decide when, or whether, to begin."
					},
					{
						"_type": "faqItem",
						"_key": "getting-started-7",
						"q": "How do I book a consultation?",
						"a": "Use the Schedule a Free Consultation button anywhere on the site, or call us at {phone}."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group2",
				"id": "cost",
				"title": "Cost and insurance",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "cost-1",
						"q": "How much does treatment cost?",
						"a": "It depends on the treatment you choose and how long it takes. At your free consultation you’ll get a clear, all-inclusive quote with no hidden fees."
					},
					{
						"_type": "faqItem",
						"_key": "cost-2",
						"q": "What does the quote include?",
						"a": "Your treatment plan, braces or aligners, every adjustment visit, emergency visits during treatment, and your first set of retainers."
					},
					{
						"_type": "faqItem",
						"_key": "cost-3",
						"q": "Will my price go up if treatment takes longer?",
						"a": "No. Your quote is all-inclusive. If treatment runs longer than planned, the extra visits are on us."
					},
					{
						"_type": "faqItem",
						"_key": "cost-4",
						"q": "Do you offer payment plans?",
						"a": "Yes. Our in-house plans are 0% interest with no hidden fees, so you can spread the cost across your treatment."
					},
					{
						"_type": "faqItem",
						"_key": "cost-5",
						"q": "Do you accept insurance?",
						"a": "We accept most major PPO plans. We check your benefits before treatment begins and file the claims for you."
					},
					{
						"_type": "faqItem",
						"_key": "cost-6",
						"q": "How much will my insurance cover?",
						"a": "It depends on your plan’s orthodontic benefit and lifetime maximum. We’ll confirm your coverage and show your exact share in your quote."
					},
					{
						"_type": "faqItem",
						"_key": "cost-7",
						"q": "Does insurance cover adult orthodontics?",
						"a": "Some plans do and some only cover children. We’ll check your plan and tell you before anything begins."
					},
					{
						"_type": "faqItem",
						"_key": "cost-8",
						"q": "Can I use my HSA or FSA?",
						"a": "Yes. Orthodontic treatment is generally a qualified medical expense, and we can provide the receipts you need."
					},
					{
						"_type": "faqItem",
						"_key": "cost-9",
						"q": "What forms of payment do you accept?",
						"a": "All major credit and debit cards, HSA and FSA cards, and our 0% interest monthly plans."
					},
					{
						"_type": "faqItem",
						"_key": "cost-10",
						"q": "What if I don’t have insurance?",
						"a": "Many patients start without coverage. A 0% interest plan spreads the cost, and you have the right to a Good Faith Estimate of your costs before treatment."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group3",
				"id": "options",
				"title": "Choosing a treatment",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "options-1",
						"q": "Braces or Invisalign: which is right for me?",
						"a": "Both can create excellent results. Invisalign is nearly invisible and removable; braces work around the clock and suit some complex cases better. Dr. Lee will help you choose."
					},
					{
						"_type": "faqItem",
						"_key": "options-2",
						"q": "Is one treatment faster than the other?",
						"a": "It depends on what needs to move. For many cases they take a similar amount of time. Dr. Lee will give you a timeline for each option."
					},
					{
						"_type": "faqItem",
						"_key": "options-3",
						"q": "Can I switch from braces to Invisalign, or back?",
						"a": "Sometimes. It depends on your progress and your bite. Ask Dr. Lee at any check-in."
					},
					{
						"_type": "faqItem",
						"_key": "options-4",
						"q": "What are clear ceramic braces?",
						"a": "Braces with tooth-colored brackets that blend in with your teeth. They work like metal braces but are much less noticeable."
					},
					{
						"_type": "faqItem",
						"_key": "options-5",
						"q": "What is jaw orthopedics?",
						"a": "Early treatment that uses gentle appliances to guide how a child’s jaw grows, which can make later treatment simpler or unnecessary."
					},
					{
						"_type": "faqItem",
						"_key": "options-6",
						"q": "Do you offer treatment for TMJ or jaw pain?",
						"a": "Dr. Lee can check whether your bite is contributing to jaw discomfort and talk through options at your consultation."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group4",
				"id": "braces",
				"title": "Braces",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "braces-1",
						"q": "How long will I need braces?",
						"a": "Most patients wear braces for 18 to 24 months, depending on what needs to be corrected."
					},
					{
						"_type": "faqItem",
						"_key": "braces-2",
						"q": "Does getting braces hurt?",
						"a": "Putting braces on doesn’t hurt. Your teeth may feel sore for a few days afterward and after adjustments."
					},
					{
						"_type": "faqItem",
						"_key": "braces-3",
						"q": "How often are adjustment visits?",
						"a": "Every 6 to 8 weeks, for a short visit with Dr. Lee."
					},
					{
						"_type": "faqItem",
						"_key": "braces-4",
						"q": "What can’t I eat with braces?",
						"a": "Avoid hard, sticky, and chewy foods like popcorn, gum, caramel, hard candy, and nuts. Cut crunchy foods like apples into small pieces."
					},
					{
						"_type": "faqItem",
						"_key": "braces-5",
						"q": "How do I clean my teeth with braces?",
						"a": "Brush after meals and floss daily with a floss threader or water flosser. We’ll show you how and give you a care kit."
					},
					{
						"_type": "faqItem",
						"_key": "braces-6",
						"q": "What if a bracket or wire comes loose?",
						"a": "Call us. It is rarely urgent. Orthodontic wax can cover anything poking until we fix it, usually at a quick visit."
					},
					{
						"_type": "faqItem",
						"_key": "braces-7",
						"q": "Can I choose colors for my braces?",
						"a": "Yes. With metal braces you can pick colored bands at each visit, or keep them clear."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group5",
				"id": "invisalign",
				"title": "Invisalign",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "invisalign-1",
						"q": "How long does Invisalign take?",
						"a": "Most cases take 12 to 18 months. Dr. Lee will give you a personal timeline after your scan."
					},
					{
						"_type": "faqItem",
						"_key": "invisalign-2",
						"q": "How many hours a day do I wear aligners?",
						"a": "About 20 to 22. Take them out only to eat, drink anything other than water, and brush."
					},
					{
						"_type": "faqItem",
						"_key": "invisalign-3",
						"q": "Will people notice my aligners?",
						"a": "Most people won’t. Some teeth need small tooth-colored attachments to help them move, and those blend in too."
					},
					{
						"_type": "faqItem",
						"_key": "invisalign-4",
						"q": "How often do I switch aligners?",
						"a": "Usually every one to two weeks, at home, following Dr. Lee’s plan."
					},
					{
						"_type": "faqItem",
						"_key": "invisalign-5",
						"q": "What if I lose or break an aligner?",
						"a": "Call us. Depending on timing, we’ll have you move to your next set or order a replacement so treatment stays on track."
					},
					{
						"_type": "faqItem",
						"_key": "invisalign-6",
						"q": "Can I drink coffee with my aligners in?",
						"a": "It’s best to take them out for anything other than water. Hot drinks can warp aligners and colored drinks can stain them."
					},
					{
						"_type": "faqItem",
						"_key": "invisalign-7",
						"q": "Is Invisalign right for teenagers?",
						"a": "Many teens do very well with aligners. Dr. Lee will help you decide whether they suit your teen’s habits."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group6",
				"id": "kids",
				"title": "Kids and early treatment",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "kids-1",
						"q": "When should my child first see an orthodontist?",
						"a": "The American Association of Orthodontists recommends a first check by age 7, when Dr. Lee can see how the jaw is growing and where adult teeth are headed."
					},
					{
						"_type": "faqItem",
						"_key": "kids-2",
						"q": "Will my child need treatment at age 7?",
						"a": "Most kids won’t. Usually we simply check in every 6 to 12 months while they grow."
					},
					{
						"_type": "faqItem",
						"_key": "kids-3",
						"q": "What is two-phase treatment?",
						"a": "An early first phase guides jaw growth while a child is young, and a shorter second phase with braces or aligners finishes the job later, if needed."
					},
					{
						"_type": "faqItem",
						"_key": "kids-4",
						"q": "Is early treatment painful for kids?",
						"a": "Kids usually feel some pressure for a few days when an appliance is placed or adjusted, not pain."
					},
					{
						"_type": "faqItem",
						"_key": "kids-5",
						"q": "Can I stay with my child during visits?",
						"a": "Yes. Parents are always welcome in the room."
					},
					{
						"_type": "faqItem",
						"_key": "kids-6",
						"q": "My child sucks their thumb. Should I be worried?",
						"a": "Habits that continue past about age 5 can affect how teeth and the jaw develop. An early check lets Dr. Lee advise you."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group7",
				"id": "teens-adults",
				"title": "Teens and adults",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "teens-adults-1",
						"q": "What age is best for braces?",
						"a": "Most treatment starts between 11 and 14, once adult teeth are in. But there’s no upper age limit."
					},
					{
						"_type": "faqItem",
						"_key": "teens-adults-2",
						"q": "Am I too old for orthodontics?",
						"a": "No. Healthy teeth can be moved at any age, and many of our patients are adults."
					},
					{
						"_type": "faqItem",
						"_key": "teens-adults-3",
						"q": "Does adult treatment take longer?",
						"a": "Sometimes a little, but many adult cases take 12 to 18 months."
					},
					{
						"_type": "faqItem",
						"_key": "teens-adults-4",
						"q": "My teeth shifted after braces as a kid. Can that be fixed?",
						"a": "Yes, and it’s very common. Often a short course of Invisalign is all it takes."
					},
					{
						"_type": "faqItem",
						"_key": "teens-adults-5",
						"q": "Can my teen play sports with braces?",
						"a": "Yes. A mouthguard is all that’s needed for contact sports, and aligners can come out for games."
					},
					{
						"_type": "faqItem",
						"_key": "teens-adults-6",
						"q": "Can I get orthodontic treatment while pregnant?",
						"a": "Often, yes. Let us know, and Dr. Lee will adjust things like X-rays and timing as needed."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group8",
				"id": "during",
				"title": "During treatment",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "during-1",
						"q": "Does treatment hurt?",
						"a": "You may feel pressure or tenderness for a few days after starting and after adjustments. It usually settles quickly with soft foods and an over-the-counter pain reliever."
					},
					{
						"_type": "faqItem",
						"_key": "during-2",
						"q": "What counts as an orthodontic emergency?",
						"a": "True emergencies are rare. Call us for anything that is painful, a loose appliance, or a wire that is poking. We’ll tell you whether it can wait."
					},
					{
						"_type": "faqItem",
						"_key": "during-3",
						"q": "Do I still need to see my regular dentist?",
						"a": "Yes. Keep your usual cleanings and checkups every six months during treatment."
					},
					{
						"_type": "faqItem",
						"_key": "during-4",
						"q": "Will treatment affect how I speak?",
						"a": "Some appliances and aligners can change speech for a few days. Most people adjust quickly."
					},
					{
						"_type": "faqItem",
						"_key": "during-5",
						"q": "Can I play an instrument during treatment?",
						"a": "Yes. Wind and brass players may need a week or two to adjust, and wax can help with comfort."
					},
					{
						"_type": "faqItem",
						"_key": "during-6",
						"q": "What if I miss an appointment?",
						"a": "Call us to reschedule. One missed visit won’t ruin your progress, but regular check-ins keep treatment on track."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group9",
				"id": "after",
				"title": "Retainers and after treatment",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "after-1",
						"q": "Why do I need a retainer?",
						"a": "Teeth naturally try to drift back after treatment. A retainer keeps them in their new positions."
					},
					{
						"_type": "faqItem",
						"_key": "after-2",
						"q": "How long do I wear a retainer?",
						"a": "Full-time at first as Dr. Lee advises, then every night for the long term."
					},
					{
						"_type": "faqItem",
						"_key": "after-3",
						"q": "What kinds of retainers are there?",
						"a": "Clear removable retainers you wear at night, and fixed retainers, a thin wire bonded behind your teeth. Dr. Lee will recommend what suits you."
					},
					{
						"_type": "faqItem",
						"_key": "after-4",
						"q": "What if I lose my retainer?",
						"a": "Call us soon, before your teeth have a chance to move. We’ll scan your teeth and make a new one."
					},
					{
						"_type": "faqItem",
						"_key": "after-5",
						"q": "How do I clean my retainer?",
						"a": "Brush it gently with cool water every day. Hot water can warp clear retainers."
					},
					{
						"_type": "faqItem",
						"_key": "after-6",
						"q": "Can you make a retainer if I was treated elsewhere?",
						"a": "Yes. We’ll scan your teeth and make a new one, even if you weren’t treated here."
					}
				]
			},
			{
				"_type": "faqGroup",
				"_key": "group10",
				"id": "visits",
				"title": "Visits and scheduling",
				"faqs": [
					{
						"_type": "faqItem",
						"_key": "visits-1",
						"q": "What are your office hours?",
						"a": "Monday through Thursday 9 to 5 and Friday 12 to 5. Monday, Tuesday, and Friday follow a rotating schedule, so please call to confirm."
					},
					{
						"_type": "faqItem",
						"_key": "visits-2",
						"q": "Do you offer early or late appointments?",
						"a": "We try to keep early and late times available for school and work schedules. Ask when you book."
					},
					{
						"_type": "faqItem",
						"_key": "visits-3",
						"q": "Where are you located?",
						"a": "At 4765 Carmel Mountain Road, Suite 200, in San Diego’s Carmel Valley."
					},
					{
						"_type": "faqItem",
						"_key": "visits-4",
						"q": "Is there parking?",
						"a": "Yes, there is free parking at the building."
					},
					{
						"_type": "faqItem",
						"_key": "visits-5",
						"q": "How do I reschedule or cancel?",
						"a": "Call us at {phone} and we’ll find a new time that works."
					},
					{
						"_type": "faqItem",
						"_key": "visits-6",
						"q": "Do I need to come with my child to every visit?",
						"a": "For younger kids, yes. For teens, a parent is welcome but doesn’t always need to stay. Just let us know your preference."
					}
				]
			}
		],
		"closing": "Still have a question?",
		"closingText": "Ask Dr. Lee in person at your free consultation, or call us anytime."
	},
	{
		"_id": "page-location",
		"_type": "locationPage",
		"seo": {
			"title": "Office Hours & Location | Torrey Hills Orthodontics",
			"description": "Torrey Hills Orthodontics is at 4765 Carmel Mountain Road, Suite 200, San Diego, CA 92130. Office hours, directions, parking, and phone."
		},
		"headline": "Find us in Carmel Valley.",
		"details": [
			{
				"_type": "fact",
				"_key": "detail1",
				"label": "Parking",
				"value": "Free parking in the building lot."
			},
			{
				"_type": "fact",
				"_key": "detail2",
				"label": "Finding us",
				"value": "Suite 200, on the second floor. The elevator is just inside the lobby."
			},
			{
				"_type": "fact",
				"_key": "detail3",
				"label": "Accessibility",
				"value": "Step-free entrance and elevator access to the office."
			}
		],
		"closing": "Come see us.",
		"closingText": "Your first visit is free, takes about an hour, and you'll meet Dr. Lee herself."
	}
];
