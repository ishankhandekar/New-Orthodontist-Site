/*
	The About pages' text as it was in the code before Sanity, used once to create their documents.
	After seeding, Sanity is the source of truth; this is only a record. Text in [square brackets] is
	a placeholder for Dr. Lee and her team to fill in, and shows highlighted on the site.
*/

export const aboutPages = [
	{
		"_id": "page-dr-lee",
		"_type": "drLeePage",
		"seo": {
			"title": "Meet Dr. Judy Lee | Torrey Hills Orthodontics",
			"description": "Meet Dr. Judy Lee, the orthodontist behind Torrey Hills Orthodontics in Carmel Valley, San Diego, who plans every treatment and sees every patient herself."
		},
		"name": "Dr. Judy Lee",
		"credentialsLine": "Orthodontist, [DDS or DMD, MS]",
		"intro": "Dr. Lee founded Torrey Hills Orthodontics to give Carmel Valley families something rare: an orthodontist who knows every patient personally, plans every smile herself, and is there at every visit.",
		"facts": [
			{
				"_type": "fact",
				"_key": "fact1",
				"label": "Specialty",
				"value": "Orthodontics"
			},
			{
				"_type": "fact",
				"_key": "fact2",
				"label": "In practice since",
				"value": "[Year]"
			},
			{
				"_type": "fact",
				"_key": "fact3",
				"label": "Board certified",
				"value": "[Confirm: American Board of Orthodontics]"
			},
			{
				"_type": "fact",
				"_key": "fact4",
				"label": "Sees every patient",
				"value": "Herself, at every visit"
			}
		],
		"approachHeading": "Her approach.",
		"approachIntro": "[A few sentences in Dr. Lee's own words about why she became an orthodontist and what she loves about it.]",
		"approach": [
			{
				"_type": "item",
				"_key": "approach1",
				"title": "With you at every visit",
				"body": "Dr. Lee sees every patient herself, from the first consultation to the final retainer check. No hand-offs."
			},
			{
				"_type": "item",
				"_key": "approach2",
				"title": "Plans you can understand",
				"body": "She walks you through what she sees and every option, in plain language, so you can decide with confidence."
			},
			{
				"_type": "item",
				"_key": "approach3",
				"title": "Care that fits your life",
				"body": "Treatment planned around school, work, and family, with the most discreet options that will work for you."
			}
		],
		"educationHeading": "Education and training.",
		"timeline": [
			{
				"_type": "milestone",
				"_key": "milestone1",
				"year": "[Year]",
				"title": "Undergraduate degree",
				"place": "[University], [Degree]"
			},
			{
				"_type": "milestone",
				"_key": "milestone2",
				"year": "[Year]",
				"title": "Dental school",
				"place": "[Dental school], [DDS or DMD]"
			},
			{
				"_type": "milestone",
				"_key": "milestone3",
				"year": "[Year]",
				"title": "Orthodontic residency",
				"place": "[Program], Certificate in Orthodontics"
			},
			{
				"_type": "milestone",
				"_key": "milestone4",
				"year": "[Year]",
				"title": "Board certification",
				"place": "[Confirm: American Board of Orthodontics]"
			},
			{
				"_type": "milestone",
				"_key": "milestone5",
				"year": "[Year]",
				"title": "Torrey Hills Orthodontics",
				"place": "Opened her practice in Carmel Valley"
			}
		],
		"credentialsHeading": "Certifications and memberships.",
		"credentials": [
			{
				"_type": "credential",
				"_key": "credential1",
				"org": "American Board of Orthodontics",
				"role": "[Confirm: Board certified diplomate]",
				"since": "[Year]"
			},
			{
				"_type": "credential",
				"_key": "credential2",
				"org": "American Association of Orthodontists",
				"role": "[Confirm: Member]",
				"since": "[Year]"
			},
			{
				"_type": "credential",
				"_key": "credential3",
				"org": "Dental Board of California",
				"role": "Licensed, license no. [number]",
				"since": "[Year]"
			},
			{
				"_type": "credential",
				"_key": "credential4",
				"org": "California Dental Association",
				"role": "[Confirm: Member]",
				"since": "[Year]"
			},
			{
				"_type": "credential",
				"_key": "credential5",
				"org": "San Diego County Dental Society",
				"role": "[Confirm: Member]",
				"since": "[Year]"
			},
			{
				"_type": "credential",
				"_key": "credential6",
				"org": "Invisalign",
				"role": "[Confirm: Provider level]",
				"since": "[Year]"
			}
		],
		"outsideHeading": "Outside the office.",
		"outsideText": "[A short, personal paragraph: family, where she grew up, hobbies, or community involvement in Carmel Valley.]",
		"closing": "Meet Dr. Lee in person.",
		"closingText": "Your free consultation is with Dr. Lee herself. Come see what's possible for your smile."
	},
	{
		"_id": "page-team",
		"_type": "teamPage",
		"seo": {
			"title": "Our Team | Torrey Hills Orthodontics",
			"description": "Meet the small, friendly team at Torrey Hills Orthodontics in Carmel Valley, San Diego."
		},
		"headline": "The people behind your smile.",
		"intro": "A small team, on purpose. You'll see the same friendly faces at every visit, and they'll know your name.",
		"members": [
			{
				"_type": "member",
				"_key": "member1",
				"name": "Dr. Judy Lee",
				"role": "Orthodontist and founder",
				"since": "[Year]",
				"blurb": [
					"Dr. Lee founded Torrey Hills Orthodontics so every patient would have one orthodontist who knows them personally. She plans every treatment herself and is there at every visit, from the first scan to the final retainer check.",
					"[A sentence about what Dr. Lee loves most about her work.]"
				],
				"link": {
					"label": "Read Dr. Lee's full story",
					"href": "/about/dr-lee"
				}
			},
			{
				"_type": "member",
				"_key": "member2",
				"name": "[Name]",
				"role": "[Treatment Coordinator]",
				"since": "[Year]",
				"blurb": [
					"Often the first person you meet, [Name] walks new patients through their visit, explains treatment options and costs, and makes sure insurance and payment plans are sorted before anything begins.",
					"[A personal detail, such as where they grew up, a hobby, or a favorite part of the job.]"
				]
			},
			{
				"_type": "member",
				"_key": "member3",
				"name": "[Name]",
				"role": "[Orthodontic Assistant]",
				"since": "[Year]",
				"blurb": [
					"[Name] works chairside with Dr. Lee, taking scans and photos, fitting appliances, and making every adjustment visit quick and comfortable, especially for younger patients.",
					"[A personal detail, such as where they grew up, a hobby, or a favorite part of the job.]"
				]
			}
		],
		"closing": "Come meet us.",
		"closingText": "Your free consultation is the best way to meet the team, and Dr. Lee herself."
	},
	{
		"_id": "page-office",
		"_type": "officePage",
		"seo": {
			"title": "Office & Technology | Torrey Hills Orthodontics",
			"description": "Inside Torrey Hills Orthodontics in Carmel Valley: a calm office with 3D digital scanning, digital X-rays, and treatment previews."
		},
		"headline": "A calm space, with modern tools.",
		"intro": "Our Carmel Valley office is designed to feel relaxed, and equipped so every visit is quicker, more comfortable, and more precise.",
		"spaceHeading": "The space.",
		"spaces": [
			{
				"_type": "space",
				"_key": "space1",
				"name": "Reception",
				"body": "Bright and quiet, with no clipboard waiting for you."
			},
			{
				"_type": "space",
				"_key": "space2",
				"name": "Treatment area",
				"body": "Calm, private chairs where Dr. Lee sees every patient."
			},
			{
				"_type": "space",
				"_key": "space3",
				"name": "Consultation room",
				"body": "Where you sit down with Dr. Lee to talk through your plan."
			},
			{
				"_type": "space",
				"_key": "space4",
				"name": "Lab and records",
				"body": "Where scans become models, aligners, and appliances."
			}
		],
		"techHeading": "The technology, and what it means for you.",
		"techIntro": "Orthodontics has changed a lot. Here's what's different about a visit with us.",
		"tech": [
			{
				"_type": "tool",
				"_key": "tool1",
				"name": "3D digital scanning",
				"model": "[Scanner model, e.g. iTero]",
				"before": "Trays of goopy impression material, held in your mouth for minutes.",
				"now": "A quick, comfortable 3D scan. No gagging, no mess, and a perfect digital model of your teeth."
			},
			{
				"_type": "tool",
				"_key": "tool2",
				"name": "Digital X-rays",
				"model": "[X-ray system]",
				"before": "Film X-rays, developed in a darkroom, with a wait for results.",
				"now": "Low-dose digital images that appear on screen in seconds, so Dr. Lee can show you what she sees."
			},
			{
				"_type": "tool",
				"_key": "tool3",
				"name": "Treatment previews",
				"model": "[Software, e.g. Invisalign ClinCheck]",
				"before": "Imagining the result from a description.",
				"now": "A 3D preview of how your teeth will move and what your finished smile could look like, before you start."
			},
			{
				"_type": "tool",
				"_key": "tool4",
				"name": "Digital records",
				"model": "[Practice software]",
				"before": "Paper charts and plaster models on a shelf.",
				"now": "Your scans, photos, and progress in one place, ready for every visit and easy to share with your dentist."
			},
			{
				"_type": "tool",
				"_key": "tool5",
				"name": "Online forms and reminders",
				"model": "[Forms and reminder service]",
				"before": "Clipboards in the waiting room and calls to confirm.",
				"now": "Forms you fill out from your phone before your visit, and text reminders so nothing gets missed."
			}
		],
		"comfortHeading": "Comfort and care.",
		"comfort": [
			{
				"_type": "fact",
				"_key": "comfort1",
				"label": "Sterilization",
				"value": "Every instrument, every time"
			},
			{
				"_type": "fact",
				"_key": "comfort2",
				"label": "Wi-Fi",
				"value": "Free, for patients and families"
			},
			{
				"_type": "fact",
				"_key": "comfort3",
				"label": "Comfort",
				"value": "[Amenities, e.g. headphones, blankets]"
			},
			{
				"_type": "fact",
				"_key": "comfort4",
				"label": "Accessibility",
				"value": "Step-free, with elevator access"
			}
		],
		"sterilizationNote": "Instruments are cleaned and sterilized between every patient, following CDC infection-control guidelines.",
		"closing": "See it for yourself.",
		"closingText": "Your free consultation includes a 3D scan, so you'll experience the technology firsthand."
	}
];
