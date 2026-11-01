/*
	The treatment and age pages' text as it was in the code before Sanity, used once to create
	their documents. After seeding, Sanity is the source of truth; this is only a record.
*/

export const templatePages = [
	{
		"_id": "treatment-invisalign",
		"_type": "treatmentPage",
		"seo": {
			"title": "Invisalign | Torrey Hills Orthodontics",
			"description": "Invisalign clear aligners in Carmel Valley, San Diego, planned and checked by Dr. Judy Lee. Nearly invisible, removable, with 0% interest payment plans."
		},
		"name": "Invisalign",
		"headline": "Straighten your smile, without anyone noticing.",
		"intro": "Clear, removable aligners, planned by Dr. Lee and checked by her at every visit. Eat what you like, brush normally, and smile all the way through.",
		"facts": [
			{
				"_type": "fact",
				"_key": "facts1",
				"label": "Typical length",
				"value": "12–18 months"
			},
			{
				"_type": "fact",
				"_key": "facts2",
				"label": "Check-ins",
				"value": "Every 8–10 weeks"
			},
			{
				"_type": "fact",
				"_key": "facts3",
				"label": "Wear time",
				"value": "20–22 hours a day"
			},
			{
				"_type": "fact",
				"_key": "facts4",
				"label": "Best for",
				"value": "Teens and adults"
			}
		],
		"goodFor": [
			"You want straighter teeth without visible brackets",
			"Your crowding, spacing, or bite issue is mild to moderate",
			"You can keep your aligners in 20–22 hours a day",
			"You play sports, an instrument, or speak in public"
		],
		"notIdeal": [
			"You would rather not be in charge of wearing them",
			"Your bite needs major correction, where braces may work better",
			"Your child's adult teeth are still coming in"
		],
		"steps": [
			{
				"_type": "item",
				"_key": "steps1",
				"title": "Scan and plan",
				"body": "A quick 3D scan, no messy impressions. Dr. Lee maps every movement and shows you a preview of your finished smile."
			},
			{
				"_type": "item",
				"_key": "steps2",
				"title": "Your first aligners",
				"body": "We fit your first set and show you how to wear and clean them, then answer every question you have."
			},
			{
				"_type": "item",
				"_key": "steps3",
				"title": "A new set every week or two",
				"body": "Switch to the next aligners at home. Each set moves your teeth a little further."
			},
			{
				"_type": "item",
				"_key": "steps4",
				"title": "Check-ins, then retainers",
				"body": "See Dr. Lee every 8–10 weeks. When you finish, a retainer keeps your new smile in place."
			}
		],
		"compare": {
			"heading": "Invisalign or braces?",
			"columns": [
				"Invisalign",
				"Braces"
			],
			"rows": [
				{
					"_type": "row",
					"_key": "row1",
					"label": "Look",
					"values": [
						"Nearly invisible",
						"Visible, or clear ceramic"
					]
				},
				{
					"_type": "row",
					"_key": "row2",
					"label": "Removable",
					"values": [
						"Yes, to eat and brush",
						"No, they stay on"
					]
				},
				{
					"_type": "row",
					"_key": "row3",
					"label": "Food",
					"values": [
						"No restrictions",
						"Avoid hard and sticky foods"
					]
				},
				{
					"_type": "row",
					"_key": "row4",
					"label": "Check-ins",
					"values": [
						"Every 8–10 weeks",
						"Every 6–8 weeks"
					]
				},
				{
					"_type": "row",
					"_key": "row5",
					"label": "Best for",
					"values": [
						"Mild to moderate cases",
						"Every case, including complex ones"
					]
				}
			]
		},
		"dayToDay": [
			{
				"_type": "item",
				"_key": "dayToDay1",
				"title": "Eating",
				"body": "Take your aligners out to eat, so there is no list of foods to avoid. Brush before you put them back in."
			},
			{
				"_type": "item",
				"_key": "dayToDay2",
				"title": "Cleaning",
				"body": "Rinse and gently brush your aligners morning and night. It takes about a minute."
			},
			{
				"_type": "item",
				"_key": "dayToDay3",
				"title": "Sports and music",
				"body": "Nothing to work around. Keep them in for most activities, or swap to a mouthguard for contact sports."
			},
			{
				"_type": "item",
				"_key": "dayToDay4",
				"title": "Comfort",
				"body": "Expect a little pressure for a day or two with each new set. It means they are working."
			}
		],
		"cost": "Invisalign usually costs about the same as braces. Your exact price depends on how long treatment takes, and you'll get a clear, all-inclusive quote at your free consultation. We'll check your insurance and can set up a 0% interest monthly plan before you start.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faqs1",
				"q": "Will people notice my aligners?",
				"a": "Most people will not. Some teeth need small tooth-colored attachments to help them move, and those blend in too."
			},
			{
				"_type": "faqItem",
				"_key": "faqs2",
				"q": "How many hours a day do I need to wear them?",
				"a": "About 20 to 22. Take them out only to eat, to drink anything other than water, and to brush."
			},
			{
				"_type": "faqItem",
				"_key": "faqs3",
				"q": "Does Invisalign hurt?",
				"a": "You may feel some pressure for a day or two with each new set. Most patients find it milder than braces."
			},
			{
				"_type": "faqItem",
				"_key": "faqs4",
				"q": "What if I lose an aligner?",
				"a": "Call us. Depending on timing, we will have you move to your next set or order a replacement, so treatment stays on track."
			},
			{
				"_type": "faqItem",
				"_key": "faqs5",
				"q": "Is Invisalign an option for teenagers?",
				"a": "Yes. Many teens do very well with aligners, and Dr. Lee will help you decide whether they are the right fit for your teen."
			}
		],
		"headings": {
			"fit": "Is Invisalign right for you?",
			"fitLabel": "A great fit if",
			"notIdealLabel": "Something else may suit you better if",
			"steps": "How Invisalign works, step by step.",
			"day": "Life with Invisalign.",
			"results": "Real Invisalign smiles.",
			"faq": "Invisalign questions, answered.",
			"closing": "Not sure if Invisalign is right for you?",
			"closingText": "That's exactly what the free consultation is for. Dr. Lee will look at your smile and walk you through every option."
		}
	},
	{
		"_id": "treatment-braces",
		"_type": "treatmentPage",
		"seo": {
			"title": "Braces | Torrey Hills Orthodontics",
			"description": "Metal and clear ceramic braces for kids, teens, and adults in Carmel Valley, San Diego, with Dr. Judy Lee at every adjustment visit."
		},
		"name": "Braces",
		"headline": "Reliable results for every kind of smile.",
		"intro": "Modern metal and clear ceramic braces, planned by Dr. Lee and adjusted by her at every visit. They work around the clock, so there's nothing to remember.",
		"facts": [
			{
				"_type": "fact",
				"_key": "facts1",
				"label": "Typical length",
				"value": "18–24 months"
			},
			{
				"_type": "fact",
				"_key": "facts2",
				"label": "Adjustments",
				"value": "Every 6–8 weeks"
			},
			{
				"_type": "fact",
				"_key": "facts3",
				"label": "Options",
				"value": "Metal or clear ceramic"
			},
			{
				"_type": "fact",
				"_key": "facts4",
				"label": "Best for",
				"value": "Kids, teens, and adults"
			}
		],
		"goodFor": [
			"You want the most predictable way to correct your bite",
			"Your crowding or bite issue is complex",
			"You'd rather not keep track of wearing anything",
			"Your child is ready for treatment but might forget aligners"
		],
		"notIdeal": [
			"You strongly prefer something nearly invisible, where Invisalign may suit you",
			"You can't avoid hard and sticky foods during treatment",
			"Your teeth only need a small adjustment"
		],
		"steps": [
			{
				"_type": "item",
				"_key": "steps1",
				"title": "Records and plan",
				"body": "Photos and a 3D scan let Dr. Lee plan exactly how each tooth will move, and show you the timeline."
			},
			{
				"_type": "item",
				"_key": "steps2",
				"title": "Placing your braces",
				"body": "A comfortable visit of about an hour, with no needles. You'll leave with a care kit and clear instructions."
			},
			{
				"_type": "item",
				"_key": "steps3",
				"title": "Adjustments",
				"body": "Every 6–8 weeks, Dr. Lee adjusts your wires to keep your teeth moving on schedule."
			},
			{
				"_type": "item",
				"_key": "steps4",
				"title": "Braces off, retainers on",
				"body": "The day your braces come off, we fit retainers that keep your new smile in place."
			}
		],
		"compare": {
			"heading": "Metal or clear ceramic?",
			"columns": [
				"Metal",
				"Clear ceramic"
			],
			"rows": [
				{
					"_type": "row",
					"_key": "row1",
					"label": "Look",
					"values": [
						"Silver, with optional colored bands",
						"Tooth-colored, blends in"
					]
				},
				{
					"_type": "row",
					"_key": "row2",
					"label": "Strength",
					"values": [
						"Very durable",
						"Durable, a little more delicate"
					]
				},
				{
					"_type": "row",
					"_key": "row3",
					"label": "Best for",
					"values": [
						"Kids, teens, and active patients",
						"Teens and adults who want discretion"
					]
				},
				{
					"_type": "row",
					"_key": "row4",
					"label": "Cost",
					"values": [
						"Usually lower",
						"Usually a little higher"
					]
				}
			]
		},
		"dayToDay": [
			{
				"_type": "item",
				"_key": "dayToDay1",
				"title": "Eating",
				"body": "Skip hard, sticky, and chewy foods like popcorn, gum, and caramel. Cut crunchy foods into small bites."
			},
			{
				"_type": "item",
				"_key": "dayToDay2",
				"title": "Cleaning",
				"body": "Brush after meals and floss once a day with a threader or water flosser. We'll show you how."
			},
			{
				"_type": "item",
				"_key": "dayToDay3",
				"title": "Sports and music",
				"body": "Wear a mouthguard for contact sports. Most musicians adjust within a week or two."
			},
			{
				"_type": "item",
				"_key": "dayToDay4",
				"title": "Comfort",
				"body": "Teeth can feel sore for a few days after placement and adjustments. Soft foods and orthodontic wax help."
			}
		],
		"cost": "The cost of braces depends on how long treatment takes and which type you choose. You'll get a clear, all-inclusive quote at your free consultation. We'll check your insurance and can set up a 0% interest monthly plan before you start.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faqs1",
				"q": "Do braces hurt?",
				"a": "Getting braces put on doesn't hurt. Your teeth may feel sore for a few days afterward and after adjustments, and that settles quickly."
			},
			{
				"_type": "faqItem",
				"_key": "faqs2",
				"q": "What if a bracket comes loose?",
				"a": "Call us. It's rarely urgent, and we'll fix it at a quick visit or at your next appointment."
			},
			{
				"_type": "faqItem",
				"_key": "faqs3",
				"q": "Can adults get braces?",
				"a": "Yes. Healthy teeth can move at any age, and clear ceramic braces are a popular choice for adults."
			},
			{
				"_type": "faqItem",
				"_key": "faqs4",
				"q": "How often are appointments?",
				"a": "Every 6–8 weeks, for a short adjustment visit with Dr. Lee."
			},
			{
				"_type": "faqItem",
				"_key": "faqs5",
				"q": "What can I eat with braces?",
				"a": "Most foods, cut into smaller pieces. Avoid hard, sticky, and chewy foods that can break a bracket."
			}
		],
		"headings": {
			"fit": "Are braces right for you?",
			"fitLabel": "A great fit if",
			"notIdealLabel": "Something else may suit you better if",
			"steps": "How braces work, step by step.",
			"day": "Life with braces.",
			"results": "Real braces smiles.",
			"faq": "Braces questions, answered.",
			"closing": "Not sure if braces are right for you?",
			"closingText": "That's exactly what the free consultation is for. Dr. Lee will look at your smile and walk you through every option."
		}
	},
	{
		"_id": "treatment-jaw-orthopedics",
		"_type": "treatmentPage",
		"seo": {
			"title": "Jaw Orthopedics | Torrey Hills Orthodontics",
			"description": "Early jaw orthopedics for kids in Carmel Valley, San Diego. Dr. Judy Lee guides jaw growth while children are growing, often making later treatment simpler."
		},
		"name": "Jaw Orthopedics",
		"headline": "Guiding jaw growth while kids are still growing.",
		"intro": "Early treatment uses gentle appliances to guide how the jaw develops, which can make later treatment shorter, simpler, or unnecessary.",
		"facts": [
			{
				"_type": "fact",
				"_key": "facts1",
				"label": "Typical age",
				"value": "7 to 11"
			},
			{
				"_type": "fact",
				"_key": "facts2",
				"label": "Typical length",
				"value": "9–18 months"
			},
			{
				"_type": "fact",
				"_key": "facts3",
				"label": "Check-ins",
				"value": "Every 6–8 weeks"
			},
			{
				"_type": "fact",
				"_key": "facts4",
				"label": "The goal",
				"value": "Room for adult teeth"
			}
		],
		"goodFor": [
			"Your child's upper and lower jaws don't line up, like an underbite or crossbite",
			"Adult teeth look like they won't have enough room",
			"Your child is between about 7 and 11 and still growing",
			"A habit like thumb sucking has affected the bite"
		],
		"notIdeal": [
			"Growth is mostly finished, as in most teens and adults, where braces or Invisalign fit better",
			"The only concern is mild crowding, which can usually wait",
			"Dr. Lee's check shows growth is on track, so we simply keep watching"
		],
		"steps": [
			{
				"_type": "item",
				"_key": "steps1",
				"title": "The age-7 check",
				"body": "A quick, free visit where Dr. Lee looks at jaw growth and how the adult teeth are coming in."
			},
			{
				"_type": "item",
				"_key": "steps2",
				"title": "A plan for growth",
				"body": "If treating now will help, Dr. Lee explains why, which appliance, and for how long. If not, we keep watching."
			},
			{
				"_type": "item",
				"_key": "steps3",
				"title": "Gentle appliances",
				"body": "An expander or similar appliance guides growth over several months, with short check-ins along the way."
			},
			{
				"_type": "item",
				"_key": "steps4",
				"title": "Watch and wait",
				"body": "After this first phase we keep an eye on growth. Any later braces or aligners are usually simpler."
			}
		],
		"dayToDay": [
			{
				"_type": "item",
				"_key": "dayToDay1",
				"title": "Eating",
				"body": "Most foods are fine. Avoid very sticky or hard foods that could loosen the appliance."
			},
			{
				"_type": "item",
				"_key": "dayToDay2",
				"title": "Cleaning",
				"body": "Brush around the appliance twice a day. A water flosser makes it much easier for kids."
			},
			{
				"_type": "item",
				"_key": "dayToDay3",
				"title": "Speech",
				"body": "Some appliances change speech for a few days. Kids usually adjust quickly."
			},
			{
				"_type": "item",
				"_key": "dayToDay4",
				"title": "Comfort",
				"body": "Expect mild pressure when an appliance is placed or adjusted. It eases within a few days."
			}
		],
		"cost": "Early treatment is usually shorter and less involved than full braces. You'll get a clear, all-inclusive quote at your free consultation, and we'll check what your insurance covers before anything begins.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faqs1",
				"q": "Why see an orthodontist at age 7?",
				"a": "By around 7, Dr. Lee can spot jaw and bite problems while they're easiest to guide. Most kids won't need treatment yet, and that's good to know too."
			},
			{
				"_type": "faqItem",
				"_key": "faqs2",
				"q": "Will my child still need braces later?",
				"a": "Often, yes, but early treatment can make later braces shorter and simpler, and sometimes avoid them altogether."
			},
			{
				"_type": "faqItem",
				"_key": "faqs3",
				"q": "Does an expander hurt?",
				"a": "Kids usually feel pressure for a few days, not pain, and it eases quickly."
			},
			{
				"_type": "faqItem",
				"_key": "faqs4",
				"q": "How long does early treatment take?",
				"a": "Typically 9 to 18 months, depending on what needs to be corrected."
			}
		],
		"headings": {
			"fit": "Is early treatment right for your child?",
			"fitLabel": "A great fit if",
			"notIdealLabel": "Something else may suit you better if",
			"steps": "How early treatment works, step by step.",
			"day": "Life with an appliance.",
			"results": "Real Jaw Orthopedics smiles.",
			"faq": "Early treatment questions, answered.",
			"closing": "Not sure if your child needs early treatment?",
			"closingText": "That's exactly what the free consultation is for. Dr. Lee will check your child's growth and tell you honestly whether treatment would help now."
		}
	},
	{
		"_id": "treatment-retainers",
		"_type": "treatmentPage",
		"seo": {
			"title": "Retainers | Torrey Hills Orthodontics",
			"description": "Retainers and replacement retainers in Carmel Valley, San Diego, including for patients treated elsewhere. Keep the smile you worked for."
		},
		"name": "Retainers",
		"headline": "Keep the smile you worked for.",
		"intro": "Teeth naturally try to drift back after braces or aligners. A retainer, fitted and checked by Dr. Lee, keeps them right where they belong.",
		"facts": [
			{
				"_type": "fact",
				"_key": "facts1",
				"label": "Starts",
				"value": "The day treatment ends"
			},
			{
				"_type": "fact",
				"_key": "facts2",
				"label": "At first",
				"value": "Wear as directed"
			},
			{
				"_type": "fact",
				"_key": "facts3",
				"label": "Long term",
				"value": "Every night"
			},
			{
				"_type": "fact",
				"_key": "facts4",
				"label": "Check-ins",
				"value": "A few visits, then yearly"
			}
		],
		"goodFor": [
			"Your retainer is lost, cracked, or broken",
			"It no longer fits comfortably",
			"Your teeth have started to shift",
			"You finished treatment somewhere else and need a new one"
		],
		"notIdeal": [
			"Your teeth have shifted a lot, so a short round of aligners may come first",
			"It's been years since you wore one and it no longer goes in"
		],
		"steps": [
			{
				"_type": "item",
				"_key": "steps1",
				"title": "Fitted the day treatment ends",
				"body": "When your braces come off or you finish aligners, we fit your retainers right away."
			},
			{
				"_type": "item",
				"_key": "steps2",
				"title": "Full-time at first",
				"body": "Wear them as much as Dr. Lee advises while your teeth settle into their new positions."
			},
			{
				"_type": "item",
				"_key": "steps3",
				"title": "Nights for the long run",
				"body": "Most people move to nightly wear. It's the simplest way to keep your smile for good."
			},
			{
				"_type": "item",
				"_key": "steps4",
				"title": "Check-ins",
				"body": "We check the fit at a few short visits, then about once a year."
			}
		],
		"compare": {
			"heading": "Removable or fixed?",
			"columns": [
				"Removable",
				"Fixed"
			],
			"rows": [
				{
					"_type": "row",
					"_key": "row1",
					"label": "Look",
					"values": [
						"Clear, nearly invisible",
						"A thin wire behind your teeth"
					]
				},
				{
					"_type": "row",
					"_key": "row2",
					"label": "Wear",
					"values": [
						"You put it in, usually at night",
						"Always in place"
					]
				},
				{
					"_type": "row",
					"_key": "row3",
					"label": "Cleaning",
					"values": [
						"Brush the retainer daily",
						"Floss carefully around the wire"
					]
				},
				{
					"_type": "row",
					"_key": "row4",
					"label": "Best for",
					"values": [
						"Most patients",
						"Teeth that tend to shift back"
					]
				}
			]
		},
		"dayToDay": [
			{
				"_type": "item",
				"_key": "dayToDay1",
				"title": "Wearing",
				"body": "Put it in every night. If it ever feels tight, wear it more, not less."
			},
			{
				"_type": "item",
				"_key": "dayToDay2",
				"title": "Cleaning",
				"body": "Brush it gently with cool water every day. Hot water can warp clear retainers."
			},
			{
				"_type": "item",
				"_key": "dayToDay3",
				"title": "Storing",
				"body": "Always use the case. Most lost retainers end up wrapped in a napkin."
			},
			{
				"_type": "item",
				"_key": "dayToDay4",
				"title": "Pets",
				"body": "Keep retainers out of reach of dogs. They love to chew them."
			}
		],
		"cost": "Your first retainers are included when you finish treatment with us. Replacements are a simple, fixed fee, and we'll tell you the price before we make anything.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faqs1",
				"q": "How long do I need to wear a retainer?",
				"a": "For as long as you want straight teeth. Most people wear one every night for the long term."
			},
			{
				"_type": "faqItem",
				"_key": "faqs2",
				"q": "What happens if I stop wearing it?",
				"a": "Teeth can slowly shift back. If it's been a while and it feels tight, call us before it stops fitting."
			},
			{
				"_type": "faqItem",
				"_key": "faqs3",
				"q": "How long does a retainer last?",
				"a": "Clear retainers usually last a few years with good care. We'll check yours at your visits."
			},
			{
				"_type": "faqItem",
				"_key": "faqs4",
				"q": "Can you make a retainer if I was treated somewhere else?",
				"a": "Yes. We'll scan your teeth and make a new one, even if you weren't treated here."
			}
		],
		"headings": {
			"fit": "Do you need a new retainer?",
			"fitLabel": "Time for a new one if",
			"notIdealLabel": "You may need more than a retainer if",
			"steps": "How retainers work, step by step.",
			"day": "Living with a retainer.",
			"results": "Real Retainers smiles.",
			"faq": "Retainer questions, answered.",
			"closing": "Lost or broken retainer?",
			"closingText": "Book a visit and we'll get you a new one before your teeth have a chance to move."
		}
	},
	{
		"_id": "age-kids",
		"_type": "agePage",
		"seo": {
			"title": "Kids Orthodontics | Torrey Hills Orthodontics",
			"description": "Kids orthodontics in Carmel Valley, San Diego. A free age-7 check with Dr. Judy Lee spots growth and bite issues early. Most kids just need watching."
		},
		"name": "Kids",
		"headline": "The right time to check is earlier than you think.",
		"intro": "A gentle first visit by age 7 lets Dr. Lee spot growth and bite issues while they're easiest to guide. Most kids won't need treatment yet, and that's good to know too.",
		"facts": [
			{
				"_type": "fact",
				"_key": "facts1",
				"label": "First visit",
				"value": "By age 7"
			},
			{
				"_type": "fact",
				"_key": "facts2",
				"label": "Most common",
				"value": "Watching, not treating"
			},
			{
				"_type": "fact",
				"_key": "facts3",
				"label": "If needed",
				"value": "Short early treatment"
			},
			{
				"_type": "fact",
				"_key": "facts4",
				"label": "The visit",
				"value": "Free, about 30 minutes"
			}
		],
		"signsHeading": "Signs it's worth an early visit.",
		"signs": [
			{
				"_type": "item",
				"_key": "signs1",
				"title": "Crowded or crooked teeth",
				"body": "Adult teeth coming in sideways, overlapped, or without enough room."
			},
			{
				"_type": "item",
				"_key": "signs2",
				"title": "A bite that doesn’t line up",
				"body": "An underbite, crossbite, or top teeth that cover the bottom ones a lot."
			},
			{
				"_type": "item",
				"_key": "signs3",
				"title": "Early or late tooth loss",
				"body": "Baby teeth falling out much earlier or later than usual."
			},
			{
				"_type": "item",
				"_key": "signs4",
				"title": "Thumb or finger sucking",
				"body": "Habits past age 5 or so can change how the jaw and teeth develop."
			},
			{
				"_type": "item",
				"_key": "signs5",
				"title": "Mouth breathing",
				"body": "Breathing mostly through the mouth can affect how the jaw grows."
			},
			{
				"_type": "item",
				"_key": "signs6",
				"title": "Jaw shifting or clicking",
				"body": "A jaw that moves to one side, clicks, or feels sore when chewing."
			}
		],
		"treatmentsHeading": "Treatments for growing smiles.",
		"treatments": [
			{
				"_type": "treatmentLink",
				"_key": "treatments1",
				"name": "Jaw Orthopedics",
				"href": "/treatments/jaw-orthopedics",
				"body": "Gentle appliances that guide jaw growth while kids are still growing."
			},
			{
				"_type": "treatmentLink",
				"_key": "treatments2",
				"name": "Braces",
				"href": "/treatments/braces",
				"body": "Reliable, around-the-clock treatment once most adult teeth are in."
			}
		],
		"stepsHeading": "What to expect, from the first check-up on.",
		"steps": [
			{
				"_type": "item",
				"_key": "steps1",
				"title": "The age-7 check",
				"body": "A quick, friendly visit. Dr. Lee looks at growth, the bite, and how adult teeth are coming in."
			},
			{
				"_type": "item",
				"_key": "steps2",
				"title": "Watch and wait",
				"body": "Most kids just come back for a short check every 6–12 months while they grow."
			},
			{
				"_type": "item",
				"_key": "steps3",
				"title": "Early treatment, if it helps",
				"body": "When guiding growth now will make later treatment simpler, Dr. Lee explains exactly why."
			},
			{
				"_type": "item",
				"_key": "steps4",
				"title": "Braces later, if needed",
				"body": "Any later treatment is usually shorter and simpler thanks to the early start."
			}
		],
		"quote": "Most of the kids I see at seven don't need anything yet. The visit is about catching the few things that are much easier to fix while they're still growing.",
		"faqHeading": "Questions parents ask.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faqs1",
				"q": "Why age 7?",
				"a": "By 7, a mix of baby and adult teeth lets Dr. Lee see how the jaw is growing and where adult teeth are headed. The American Association of Orthodontists recommends a first check by then."
			},
			{
				"_type": "faqItem",
				"_key": "faqs2",
				"q": "Does my child need a referral from our dentist?",
				"a": "No. You can book the free consultation directly, and we’re happy to work alongside your family dentist."
			},
			{
				"_type": "faqItem",
				"_key": "faqs3",
				"q": "Will the visit be scary?",
				"a": "Not at all. There are no needles or shots. Dr. Lee takes a look, a few photos, and explains what she sees in kid-friendly terms."
			},
			{
				"_type": "faqItem",
				"_key": "faqs4",
				"q": "Is early treatment covered by insurance?",
				"a": "Many plans cover part of orthodontic treatment for kids. We'll check your benefits before anything begins."
			}
		],
		"closing": "Is your child due for a check?",
		"closingText": "Book the free age-7 visit. If everything looks on track, you'll leave with peace of mind."
	},
	{
		"_id": "age-teens",
		"_type": "agePage",
		"seo": {
			"title": "Teen Orthodontics | Torrey Hills Orthodontics",
			"description": "Braces and Invisalign for teens in Carmel Valley, San Diego, planned around school and sports by Dr. Judy Lee."
		},
		"name": "Teens",
		"headline": "A confident smile for the years that count.",
		"intro": "Most orthodontic treatment happens in the teen years, when adult teeth are in and the jaw is still growing. Dr. Lee makes it fit around school, sports, and everything else.",
		"facts": [
			{
				"_type": "fact",
				"_key": "facts1",
				"label": "Typical start",
				"value": "Ages 11 to 14"
			},
			{
				"_type": "fact",
				"_key": "facts2",
				"label": "Typical length",
				"value": "12–24 months"
			},
			{
				"_type": "fact",
				"_key": "facts3",
				"label": "Options",
				"value": "Braces or Invisalign"
			},
			{
				"_type": "fact",
				"_key": "facts4",
				"label": "Visits",
				"value": "Fit around school"
			}
		],
		"signsHeading": "Signs it's time for treatment.",
		"signs": [
			{
				"_type": "item",
				"_key": "signs1",
				"title": "Crowded or crooked teeth",
				"body": "Adult teeth overlapping, twisted, or without enough room."
			},
			{
				"_type": "item",
				"_key": "signs2",
				"title": "Gaps between teeth",
				"body": "Spaces that have stayed after all the adult teeth came in."
			},
			{
				"_type": "item",
				"_key": "signs3",
				"title": "An overbite or underbite",
				"body": "Top and bottom teeth that don’t meet the way they should."
			},
			{
				"_type": "item",
				"_key": "signs4",
				"title": "Self-consciousness",
				"body": "Hiding a smile in photos is a reason worth taking seriously."
			},
			{
				"_type": "item",
				"_key": "signs5",
				"title": "Hard to keep clean",
				"body": "Crowded teeth trap food and make brushing and flossing harder."
			},
			{
				"_type": "item",
				"_key": "signs6",
				"title": "Your dentist mentioned it",
				"body": "A note from the family dentist is a good prompt for a free check."
			}
		],
		"treatmentsHeading": "Treatments teens choose.",
		"treatments": [
			{
				"_type": "treatmentLink",
				"_key": "treatments1",
				"name": "Invisalign",
				"href": "/treatments/invisalign",
				"body": "Nearly invisible aligners for teens who can keep them in 20–22 hours a day."
			},
			{
				"_type": "treatmentLink",
				"_key": "treatments2",
				"name": "Braces",
				"href": "/treatments/braces",
				"body": "Metal or clear ceramic, working around the clock with nothing to remember."
			},
			{
				"_type": "treatmentLink",
				"_key": "treatments3",
				"name": "Retainers",
				"href": "/treatments/retainers",
				"body": "Keeps the new smile in place once treatment is done."
			}
		],
		"stepsHeading": "What to expect, start to finish.",
		"steps": [
			{
				"_type": "item",
				"_key": "steps1",
				"title": "Free consultation",
				"body": "A scan, a few photos, and a sit-down with Dr. Lee to talk through options with you and your parents."
			},
			{
				"_type": "item",
				"_key": "steps2",
				"title": "Choosing together",
				"body": "Braces or Invisalign, decided around your teen’s habits, activities, and goals."
			},
			{
				"_type": "item",
				"_key": "steps3",
				"title": "Treatment that fits",
				"body": "Short check-ins every 6–10 weeks, with early and late appointments for school schedules."
			},
			{
				"_type": "item",
				"_key": "steps4",
				"title": "Retainers to finish",
				"body": "The new smile is kept in place with retainers, fitted the day treatment ends."
			}
		],
		"quote": "Teens are busy, so I plan treatment around their lives, not the other way around. My goal is for them to forget they're even in treatment.",
		"faqHeading": "Questions teens and parents ask.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faqs1",
				"q": "Braces or Invisalign for a teen?",
				"a": "Both work well. Invisalign suits teens who will wear aligners consistently; braces suit those who would rather not think about it. Dr. Lee will help you decide together."
			},
			{
				"_type": "faqItem",
				"_key": "faqs2",
				"q": "Can my teen play sports with braces?",
				"a": "Yes. A mouthguard is all that’s needed for contact sports, and aligners can come out for games."
			},
			{
				"_type": "faqItem",
				"_key": "faqs3",
				"q": "Will treatment get in the way of school?",
				"a": "Check-ins are short and spaced 6–10 weeks apart, and we offer appointment times that work around the school day."
			},
			{
				"_type": "faqItem",
				"_key": "faqs4",
				"q": "Is teen treatment covered by insurance?",
				"a": "Many plans include orthodontic coverage for teens. We'll check your benefits and set up a 0% interest plan for the rest."
			}
		],
		"closing": "Ready to talk about your teen's smile?",
		"closingText": "Book a free consultation. Dr. Lee will walk you both through every option, with no pressure."
	},
	{
		"_id": "age-adults",
		"_type": "agePage",
		"seo": {
			"title": "Adult Orthodontics | Torrey Hills Orthodontics",
			"description": "Adult braces and Invisalign in Carmel Valley, San Diego. Discreet treatment that fits work and family, with Dr. Judy Lee at every visit."
		},
		"name": "Adults",
		"headline": "It's never too late for the smile you want.",
		"intro": "Healthy teeth can move at any age, and many of Dr. Lee's patients are adults. Discreet options fit around work, family, and everything in between.",
		"facts": [
			{
				"_type": "fact",
				"_key": "facts1",
				"label": "Age limit",
				"value": "None"
			},
			{
				"_type": "fact",
				"_key": "facts2",
				"label": "Most popular",
				"value": "Invisalign"
			},
			{
				"_type": "fact",
				"_key": "facts3",
				"label": "Typical length",
				"value": "12–18 months"
			},
			{
				"_type": "fact",
				"_key": "facts4",
				"label": "Visits",
				"value": "Before or after work"
			}
		],
		"signsHeading": "Reasons adults come in.",
		"signs": [
			{
				"_type": "item",
				"_key": "signs1",
				"title": "Teeth that have shifted",
				"body": "Teeth often move over time, especially if retainers stopped being worn."
			},
			{
				"_type": "item",
				"_key": "signs2",
				"title": "Crowding or gaps",
				"body": "Something that has always bothered you and never got fixed."
			},
			{
				"_type": "item",
				"_key": "signs3",
				"title": "Bite problems",
				"body": "Uneven wear, jaw soreness, or teeth that don’t meet comfortably."
			},
			{
				"_type": "item",
				"_key": "signs4",
				"title": "Before dental work",
				"body": "Moving teeth first can make implants or crowns work better."
			},
			{
				"_type": "item",
				"_key": "signs5",
				"title": "Easier cleaning",
				"body": "Straight teeth are easier to brush and floss, which helps your gums."
			},
			{
				"_type": "item",
				"_key": "signs6",
				"title": "Confidence",
				"body": "Smiling freely in meetings, photos, and everyday life."
			}
		],
		"treatmentsHeading": "Treatments adults choose.",
		"treatments": [
			{
				"_type": "treatmentLink",
				"_key": "treatments1",
				"name": "Invisalign",
				"href": "/treatments/invisalign",
				"body": "Nearly invisible and removable, so it fits around work and social life."
			},
			{
				"_type": "treatmentLink",
				"_key": "treatments2",
				"name": "Braces",
				"href": "/treatments/braces",
				"body": "Clear ceramic braces blend in, and suit more complex bites."
			},
			{
				"_type": "treatmentLink",
				"_key": "treatments3",
				"name": "Retainers",
				"href": "/treatments/retainers",
				"body": "Replacements for lost or worn retainers, even if you weren't treated here."
			}
		],
		"stepsHeading": "What to expect as an adult patient.",
		"steps": [
			{
				"_type": "item",
				"_key": "steps1",
				"title": "Free consultation",
				"body": "A scan and an honest conversation with Dr. Lee about what is possible and what it will take."
			},
			{
				"_type": "item",
				"_key": "steps2",
				"title": "A plan around your life",
				"body": "Options and timelines that fit your schedule, budget, and how visible you want treatment to be."
			},
			{
				"_type": "item",
				"_key": "steps3",
				"title": "Efficient check-ins",
				"body": "Short visits every 6–10 weeks, with early and late appointment times."
			},
			{
				"_type": "item",
				"_key": "steps4",
				"title": "Keeping it for good",
				"body": "Retainers keep your new smile in place for the long run."
			}
		],
		"quote": "Some of my happiest patients are adults who waited years to do this. It's never too late, and treatment is more discreet than most people expect.",
		"faqHeading": "Questions adults ask.",
		"faqs": [
			{
				"_type": "faqItem",
				"_key": "faqs1",
				"q": "Am I too old for orthodontics?",
				"a": "No. If your teeth and gums are healthy, they can be moved at any age."
			},
			{
				"_type": "faqItem",
				"_key": "faqs2",
				"q": "Will people notice?",
				"a": "With Invisalign or clear ceramic braces, most people won’t. Many adults go through treatment without colleagues noticing."
			},
			{
				"_type": "faqItem",
				"_key": "faqs3",
				"q": "Does adult treatment take longer?",
				"a": "Sometimes a little, but many adult cases take 12–18 months. You’ll get a personal timeline at your consultation."
			},
			{
				"_type": "faqItem",
				"_key": "faqs4",
				"q": "Does insurance cover adult orthodontics?",
				"a": "Some plans do. We'll check your benefits and can set up a 0% interest monthly plan."
			}
		],
		"closing": "Ready for the smile you've been waiting for?",
		"closingText": "Book a free consultation and find out what's possible, with no pressure and no obligation."
	}
];
