/**
 * ANNIYAN.COM - GARUDA PURANA JUSTICE ENGINE
 * High-performance, modular vanilla JavaScript application.
 */

(() => {
    'use strict';

    /* ==========================================================================
       1. DATA DEFINITIONS & GARUDA PURANA HELLS
       ========================================================================== */

    const GARUDA_HELLS = [
        {
            id: 'kumbhipaka',
            nameTa: 'கும்பிபாகம் (Kumbhipaka)',
            nameEn: 'Kumbhipaka (Boiling Oil Cauldron)',
            icon: '🔥',
            category: 'bribery',
            shloka: 'कुम्भीपाकेषु पच्यन्ते पापिनो घोरकर्मिणः ।',
            sinsTa: 'லஞ்சம், ஊழல், வரி ஏய்ப்பு மற்றும் ஏழைகளின் உழைப்பை சுரண்டுதல்.',
            sinsEn: 'Bribery, rampant corruption, tax evasion, and exploiting the poor.',
            punishmentTa: 'குற்றவாளி கொதிக்கும் எண்ணெய்க் கொப்பரையில் தூக்கி எறியப்பட்டு உடலின் ஒவ்வொரு சதையும் பொசுக்கப்பட்டு வாட்டி வதைக்கப்படுவார்.',
            punishmentEn: 'The offender is cast into a giant cauldron of searing, bubbling oil where their flesh is continuously roasted for their greed.'
        },
        {
            id: 'krimibhojanam',
            nameTa: 'கிருமிபோஜனம் (Krimibhojanam)',
            nameEn: 'Krimibhojanam (Devoured by Flesh Worms)',
            icon: '🐛',
            category: 'adulteration',
            shloka: 'कृमिभोजने पापिष्ठाः कृमिभिर्भक्ष्यन्ते भृशम् ।',
            sinsTa: 'உணவு கலப்படம், போலி மருந்து தயாரிப்பு, விஷம் கலத்தல், பொதுமக்களின் ஆரோக்கியத்தை கெடுத்தல்.',
            sinsEn: 'Food adulteration, manufacturing counterfeit medicines, contaminating public nutrition.',
            punishmentTa: 'பல்லாயிரக்கணக்கான விஷப் புழுக்களும் விஷப் பூச்சிகளும் குற்றவாளியின் உடலை உயிருடன் இருக்கும்போதே துளைத்து உள்ளிருந்து தின்ன விடப்படும்.',
            punishmentEn: 'Countless venomous flesh-eating worms and parasites devour the offender alive from the inside out.'
        },
        {
            id: 'andhakupa',
            nameTa: 'அந்தகூபம் (Andhakupa)',
            nameEn: 'Andhakupa (Well of Dark Vipers)',
            icon: '🐍',
            category: 'negligence',
            shloka: 'अन्धकूपे निपतन्ति ये हन्युर्मानवान् भुवि ।',
            sinsTa: 'சாலை விபத்தை வேடிக்கை பார்த்தல், விபத்தை ஏற்படுத்தி விட்டு தப்பி ஓடுதல், அலட்சியத்தால் பிறர் இறக்கக் காரணமாதல்.',
            sinsEn: 'Hit-and-run, fatal road negligence, refusing to rescue dying accident victims.',
            punishmentTa: 'முற்றிலும் இருண்ட ஆழமான பாழுங்கிணற்றில் கொடூர விஷப் பாம்புகளும், தேள்களும் குற்றவாளியின் உடலை இடைவிடாது கொத்தி விஷமேற்றும்.',
            punishmentEn: 'Thrown into a pitch-black abyss filled with deadly serpents and scorpions that perpetually strike the condemned.'
        },
        {
            id: 'suchimukha',
            nameTa: 'சூசிமுகம் (Suchimukha)',
            nameEn: 'Suchimukha (Needle-Pierced Torment)',
            icon: '🪡',
            category: 'fraud',
            shloka: 'सूचीमुखे प्रविध्यन्ते सूचिभिस्तीक्ष्णधारिभिः ।',
            sinsTa: 'நம்பிக்கைத் துரோகம், பண மோசடி, ஏமாற்று வேலைகள், பொய்யான வாக்குறுதிகள் அளித்தல்.',
            sinsEn: 'Breach of trust, financial scams, forgery, exploiting innocent believers.',
            punishmentTa: 'பழுக்கக் காய்ச்சிய எரியும் ஊசிகளால் குற்றவாளியின் நரம்புகள், கண்கள் மற்றும் உடலெங்கும் இடைவிடாது தைத்துக் குத்தப்படும்.',
            punishmentEn: 'Red-hot needle spikes continually pierce every nerve ending, eye, and pore of the offender.'
        },
        {
            id: 'rauravam',
            nameTa: 'ரௌரவம் (Rauravam)',
            nameEn: 'Rauravam (Torment of Ruru Beasts)',
            icon: '🐾',
            category: 'civic',
            shloka: 'रौरवे रुरुभिः क्रूरैः पीड्यन्ते सर्वपापिनः ।',
            sinsTa: 'பொதுச் சொத்துக்களை நாசமாக்குதல், பொய் சாட்சி சொல்லுதல், அப்பாவிகளை சிறைப்படுத்துதல்.',
            sinsEn: 'Vandalizing public infrastructure, giving false witness, framing innocent people.',
            punishmentTa: 'ருரு எனப்படும் விஷப் பற்களுடைய அசுர மிருகங்கள் குற்றவாளியின் எலும்புகளை முறித்து சதைகளைப் பிய்த்து எறியும்.',
            punishmentEn: 'Ferocious mythological beasts called Rurus tear the offender apart limb by limb repeatedly.'
        },
        {
            id: 'vaitarani',
            nameTa: 'வைதரணி (Vaitarani)',
            nameEn: 'Vaitarani (River of Blood and Bile)',
            icon: '🌊',
            category: 'traffic',
            shloka: 'वैतरण्यां निमज्जन्ति रुधिरपूयवाहिनीषु ।',
            sinsTa: 'அதிகார துஷ்பிரயோகம், கொடுங்கோல் ஆட்சி, அப்பாவிகளை துன்புறுத்துதல், பொது ஒழுக்கக்கேடு.',
            sinsEn: 'Abuse of administrative power, reckless public endangerment, cruelty.',
            punishmentTa: 'ரத்தம், சீழ், மனித எலும்புகள் மற்றும் கொதிக்கும் அமிலம் நிறைந்த வைதரணி நதியில் குற்றவாளி மூழ்கடிக்கப்பட்டு வதைக்கப்படுவார்.',
            punishmentEn: 'Submerged in the ghastly river of boiling bile, blood, and bones while predatory creatures attack from below.'
        },
        {
            id: 'asipatravanam',
            nameTa: 'அசிபத்ரவனம் (Asipatravanam)',
            nameEn: 'Asipatravanam (Forest of Sword Leaves)',
            icon: '🗡️',
            category: 'civic',
            shloka: 'असिपत्रवने तीक्ष्णैश्छिद्यन्ते खड्गपत्रकैः ।',
            sinsTa: 'தர்ம நெறிகளை மீறுதல், பெற்றோரை கைவிடுதல், சமூக அமைதியை சீர்குலைத்தல்.',
            sinsEn: 'Violating fundamental moral laws, abandoning elderly parents, spreading discord.',
            punishmentTa: 'வாள் போன்ற கூர்மையான இலைகள் கொண்ட மரக்காட்டில் குற்றவாளி ஓடவிடப்பட்டு, உதிரும் இலைகள் உடலைத் துண்டு துண்டாக வெட்டி அறுக்கும்.',
            punishmentEn: 'Forced to run through a razor-edged forest where razor sword leaves fall like rain to lacerate the body.'
        },
        {
            id: 'sandamsam',
            nameTa: 'சந்தம்சம் (Sandamsam)',
            nameEn: 'Sandamsam (Fiery Tongs of Justice)',
            icon: '🦞',
            category: 'bribery',
            shloka: 'सन्दंशेन विकृष्यन्ते जिह्वा गात्राणि पापिनाम् ।',
            sinsTa: 'அரசு ஊழியர்களின் அலட்சியம், லஞ்சம் வாங்கிக் கொண்டு கடமையைச் செய்யாமல் இருத்தல், பொய் பிரச்சாரம்.',
            sinsEn: 'Dereliction of duty by officials, extorting citizens, deceitful speech.',
            punishmentTa: 'நெருப்பில் பழுக்கக் காய்ச்சிய இரும்பு இடுக்கிகளால் குற்றவாளியின் நாக்கு மற்றும் தசைகள் ஒவ்வொன்றாகப் பிடுங்கி எறியப்படும்.',
            punishmentEn: 'Red-hot metal pincers rip out the tongue and sinews of the offender without mercy.'
        }
    ];

    /* ==========================================================================
       2. TRANSLATIONS (TAMIL / ENGLISH)
       ========================================================================== */

    const I18N = {
        ta: {
            brandTitle: 'அந்நியன்.COM',
            brandTagline: 'கருட புராண நீதிப் போர்டல்',
            navReport: 'புகார் பதிவு',
            navCodex: 'கருட புராணம்',
            navLedger: 'தீர்ப்புப் பதிவேடு',
            navVideo: 'திரைப்பட வீடியோ',
            soundOn: 'ஒலி ஆன்',
            soundOff: 'ஒலி ஆஃப்',
            gateTitle: 'அந்நியன் நீதி பீடம்',
            gateQuote: '"ஒரு தவறு செய்தால் அதை திருத்த வேண்டும்...\nதிருந்தவில்லை என்றால் தண்டிக்க வேண்டும்!"',
            gateSubtext: 'கருட புராணத்தின் கொடிய நரக தண்டனைகள் வழியே குற்றவாளிகளுக்கு உடனடி தீர்ப்பு.',
            enterPortal: 'நீதி மன்றத்தினுள் பிரவேசி',
            quickDirect: 'நேரடிப் புகார் படிவம்',
            badgeForm: '⚖️ நேரடி புகார் மனு',
            formHeading: 'குற்றவாளியின் தகவல் & புகார் விவரம்',
            formSub: 'சமூகத்திற்கு எதிரான துரோகங்கள், லஞ்சம் மற்றும் அலட்சியங்களை பதிவு செய்யுங்கள்.',
            lblCulpritName: 'குற்றவாளியின் பெயர் / பதவி',
            lblCulpritAge: 'குற்றவாளியின் வயது',
            lblLocation: 'குற்றம் நடந்த இடம் / நகரம்',
            lblCategory: 'குற்றத்தின் வகைப்பாடு (Crime Category)',
            lblDetails: 'குற்றத்தின் முழு விவரம் (Complaint Description)',
            lblSeverity: 'குற்றத்தின் தீவிரம் (Severity Level)',
            sevModerate: 'நடுத்தரம்',
            sevSevere: 'கொடூரமானது',
            sevExtreme: 'மன்னிக்க முடியாதது',
            submitBtn: 'அந்நியனுக்கு மனு அனுப்பு (தீர்ப்பு கோருக)',
            ruleTitle: 'கருட புராண விதிகளின்படி தண்டனை',
            rulePara: '"100 கோடி மக்கள் இருக்கும் இந்த தேசத்தில், ஒவ்வொருவனும் தன் கடமையை சரியாக செய்தால் அங்கே குற்றவாளியே இருக்க மாட்டான்."',
            statLabel: 'கருட புராணத்தால் விசாரிக்கப்பட்ட புகார்கள்',
            codexHeading: 'கருட புராண நரக தண்டனைகள் அகராதி',
            codexDesc: 'மகாபாரதம் மற்றும் கருட புராணத்தில் கூறப்பட்டுள்ள பாவங்களும் அவற்றுக்குரிய கொடூர நரகத் தண்டனைகளும்.',
            ledgerHeading: 'பதிவான புகார்கள் & வழங்கப்பட்ட தீர்ப்புகள்',
            ledgerDesc: 'இந்த அமர்வில் நீங்கள் சமர்ப்பித்த மற்றும் சேமிக்கப்பட்ட குற்றவாளிகளின் பட்டியல்.',
            emptyTitle: 'தற்போது புதிய புகார்கள் எதுவும் இல்லை',
            emptyDesc: 'குற்றவாளியின் தகவல்களை புகார் படிவத்தில் சமர்ப்பித்தால், அவர்களுக்குரிய கருட புராணத் தீர்ப்பு இங்கு பதிவு செய்யப்படும்.',
            verdictTitle: 'அந்நியனின் இறுதித் தீர்ப்பு',
            verdictCulpritLbl: 'குற்றவாளி:',
            verdictAgeLbl: 'வயது:',
            verdictCategoryLbl: 'குற்ற வகை:',
            verdictCrimeLbl: 'செய்யப்பட்ட பாவம் / அநீதி:',
            verdictHellType: 'கருட புராண நரகம் & தண்டனை',
            modalWarning: '"தவறு செய்பவன் யாராக இருந்தாலும் அந்நியனின் தண்டனையிலிருந்து தப்ப முடியாது!"',
            copySuccess: 'தீர்ப்பு ஆவணம் நகலெடுக்கப்பட்டது!',
            formValidationErr: 'தயவுசெய்து தேவையான அனைத்து விவரங்களையும் சரியாக உள்ளிடவும்.',
            clearLedgerConfirm: 'அனைத்து பதிவேடுகளையும் நீக்க வேண்டுமா?',
            newComplaintBtn: 'புதிய புகார் பதிவு செய்க',
            toastDeleted: 'பதிவு நீக்கப்பட்டது.',
            ytTitle: 'அந்நியன்.COM • Official Movie Opening Sequence (கருட புராண நீதி தீர்ப்பு)',
            skipIn: 'Skip in',
            skipIntro: 'Skip Intro ⏭️'
        },
        en: {
            brandTitle: 'ANNIYAN.COM',
            brandTagline: 'Garuda Purana Justice Portal',
            navReport: 'Submit Complaint',
            navCodex: 'Garuda Codex',
            navLedger: 'Punishment Ledger',
            navVideo: 'Movie Video',
            soundOn: 'Audio ON',
            soundOff: 'Audio OFF',
            gateTitle: 'Anniyan Tribunal',
            gateQuote: '"If a mistake is made, it must be corrected...\nIf not corrected, it must be punished!"',
            gateSubtext: 'Swift, unrelenting justice dispensed through the ancient Garuda Purana penal codes.',
            enterPortal: 'Enter The Tribunal',
            quickDirect: 'Quick Report Form',
            badgeForm: '⚖️ Official Grievance Filing',
            formHeading: 'Offender Particulars & Grievance',
            formSub: 'Report corruption, adulteration, negligence, and societal transgressions.',
            lblCulpritName: 'Offender Name / Designation',
            lblCulpritAge: 'Offender Age',
            lblLocation: 'Incident Location / City',
            lblCategory: 'Crime Classification',
            lblDetails: 'Detailed Description of Transgression',
            lblSeverity: 'Transgression Severity',
            sevModerate: 'Moderate',
            sevSevere: 'Severe',
            sevExtreme: 'Unforgivable',
            submitBtn: 'Transmit To Anniyan (Demand Verdict)',
            ruleTitle: 'Ancient Garuda Purana Jurisprudence',
            rulePara: '"In a nation of a billion souls, if each person performed their fundamental duty, crime would cease to exist."',
            statLabel: 'Cases adjudicated under Garuda Purana',
            codexHeading: 'Garuda Purana Hell Lexicon',
            codexDesc: 'Ancient classifications of sins and their exact corresponding penalties in the Netherworld.',
            ledgerHeading: 'Adjudicated Cases & Punishment Ledger',
            ledgerDesc: 'Historical records of submitted culprits and their assigned Netherworld verdicts.',
            emptyTitle: 'No complaints logged currently',
            emptyDesc: 'Submit an offender\'s details in the form to generate and record their ancient punishment verdict.',
            verdictTitle: 'Anniyan\'s Final Verdict',
            verdictCulpritLbl: 'Offender:',
            verdictAgeLbl: 'Age:',
            verdictCategoryLbl: 'Crime Category:',
            verdictCrimeLbl: 'Transgression Committed:',
            verdictHellType: 'Assigned Hell & Punishment',
            modalWarning: '"Whoever violates the law of nature and justice shall not escape Anniyan\'s wrath!"',
            copySuccess: 'Verdict Document Copied to Clipboard!',
            formValidationErr: 'Please fill in all mandatory fields with valid information.',
            clearLedgerConfirm: 'Are you sure you want to clear all punishment records?',
            newComplaintBtn: 'File New Complaint',
            toastDeleted: 'Record permanently deleted.',
            ytTitle: 'ANNIYAN.COM • Official Movie Opening Sequence (Garuda Purana Verdict)',
            skipIn: 'Skip in',
            skipIntro: 'Skip Intro ⏭️'
        }
    };

    /* ==========================================================================
       3. SYNTHETIC AUDIO ENGINE (WEB AUDIO API)
       ========================================================================== */

    class SoundEngine {
        constructor() {
            this.ctx = null;
            this.enabled = true;
            this.droneOsc = null;
            this.droneGain = null;
            const savedPref = localStorage.getItem('anniyan_sound');
            if (savedPref !== null) {
                this.enabled = savedPref === 'true';
            }
        }

        initContext() {
            if (!this.ctx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    this.ctx = new AudioContext();
                }
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        }

        startIntroDrone() {
            if (!this.enabled) return;
            try {
                this.initContext();
                if (!this.ctx) return;
                this.stopIntroDrone();

                const now = this.ctx.currentTime;
                this.droneOsc = this.ctx.createOscillator();
                this.droneGain = this.ctx.createGain();

                this.droneOsc.type = 'sawtooth';
                this.droneOsc.frequency.setValueAtTime(55, now);
                this.droneOsc.frequency.exponentialRampToValueAtTime(45, now + 10);

                this.droneGain.gain.setValueAtTime(0.01, now);
                this.droneGain.gain.exponentialRampToValueAtTime(0.18, now + 2.5);

                this.droneOsc.connect(this.droneGain);
                this.droneGain.connect(this.ctx.destination);
                this.droneOsc.start(now);
            } catch (e) {
                console.warn('Drone start error', e);
            }
        }

        stopIntroDrone() {
            try {
                if (this.droneGain && this.ctx) {
                    const now = this.ctx.currentTime;
                    this.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
                    setTimeout(() => {
                        if (this.droneOsc) {
                            try { this.droneOsc.stop(); } catch (e) {}
                            this.droneOsc = null;
                            this.droneGain = null;
                        }
                    }, 600);
                }
            } catch (e) {}
        }

        playThunderSting() {
            if (!this.enabled) return;
            try {
                this.initContext();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                
                // Deep sub rumble
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(120, now);
                osc.frequency.exponentialRampToValueAtTime(25, now + 1.4);
                
                gain.gain.setValueAtTime(0.4, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 1.8);
            } catch (e) {
                console.warn('Audio play error', e);
            }
        }

        playBellToll() {
            if (!this.enabled) return;
            try {
                this.initContext();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;

                const freqs = [220, 330, 440, 587];
                freqs.forEach(freq => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.22, now);
                    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 2.7);
                });
            } catch (e) {
                console.warn('Audio play error', e);
            }
        }

        playClick() {
            if (!this.enabled) return;
            try {
                this.initContext();
                if (!this.ctx) return;
                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(480, now);
                osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.09);
            } catch (e) {
                // Ignore silent failure
            }
        }

        toggle() {
            this.enabled = !this.enabled;
            localStorage.setItem('anniyan_sound', this.enabled);
            if (!this.enabled) {
                this.stopIntroDrone();
            }
            return this.enabled;
        }
    }

    /* ==========================================================================
       4. AMBIENT PARTICLES & CANVAS ENGINE
       ========================================================================== */

    class AmbientCanvas {
        constructor(canvasId) {
            this.canvas = document.getElementById(canvasId);
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.numParticles = 45;
            this.width = 0;
            this.height = 0;
            this.animationFrameId = null;

            this.resize();
            window.addEventListener('resize', () => this.resize());
            this.initParticles();
            this.animate();
        }

        resize() {
            if (!this.canvas) return;
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        }

        initParticles() {
            this.particles = [];
            for (let i = 0; i < this.numParticles; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    radius: Math.random() * 2.2 + 0.6,
                    speedY: -(Math.random() * 0.5 + 0.2),
                    speedX: (Math.random() - 0.5) * 0.4,
                    opacity: Math.random() * 0.6 + 0.2,
                    color: Math.random() > 0.3 ? 'rgba(0, 255, 115, ' : 'rgba(16, 185, 129, '
                });
            }
        }

        animate() {
            if (!this.ctx) return;
            this.ctx.clearRect(0, 0, this.width, this.height);

            for (let p of this.particles) {
                p.y += p.speedY;
                p.x += p.speedX;

                if (p.y < -10) {
                    p.y = this.height + 10;
                    p.x = Math.random() * this.width;
                }
                if (p.x < -10) p.x = this.width + 10;
                if (p.x > this.width + 10) p.x = -10;

                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color + p.opacity + ')';
                this.ctx.shadowBlur = 8;
                this.ctx.shadowColor = '#00ff73';
                this.ctx.fill();
            }

            this.animationFrameId = requestAnimationFrame(() => this.animate());
        }
    }

    /* ==========================================================================
       5. YOUTUBE-STYLE MOVIE INTRO VIDEO ENGINE (ANNIYAN.MOV)
       ========================================================================== */

    class MovieIntroVideoPlayer {
        constructor(soundEngine, getLangFn, onDismiss) {
            this.sound = soundEngine;
            this.getLang = getLangFn;
            this.onDismiss = onDismiss;
            this.isPlaying = true;
            this.isMuted = true; // start muted for smooth browser autoplay policy

            this.dom = {
                overlay: document.getElementById('movieVideoModal'),
                playerFrame: document.getElementById('ytPlayerFrame'),
                screenContainer: document.getElementById('ytScreenContainer'),
                videoEl: document.getElementById('anniyanVideo'),
                unmutePrompt: document.getElementById('ytUnmutePrompt'),
                skipBtn: document.getElementById('ytSkipBtn'),
                skipText: document.getElementById('ytSkipText')
            };

            this.init();
        }

        init() {
            this.setupVideoEvents();
            this.bindEvents();
            this.start();
        }

        setupVideoEvents() {
            if (!this.dom.videoEl) return;
            const v = this.dom.videoEl;

            v.addEventListener('ended', () => {
                this.dismissVideo();
            });

            v.addEventListener('play', () => {
                this.isPlaying = true;
            });

            v.addEventListener('pause', () => {
                this.isPlaying = false;
            });

            // Volume & Unmute state change
            v.addEventListener('volumechange', () => {
                this.isMuted = v.muted;
                if (this.dom.unmutePrompt) {
                    if (v.muted) {
                        this.dom.unmutePrompt.classList.add('visible');
                    } else {
                        this.dom.unmutePrompt.classList.remove('visible');
                    }
                }
            });
        }

        bindEvents() {
            // Direct Skip Button - takes user straight to tribunal
            if (this.dom.skipBtn) {
                this.dom.skipBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.dismissVideo();
                });
            }

            // Click anywhere on video to unmute or toggle Play/Pause
            if (this.dom.screenContainer) {
                this.dom.screenContainer.addEventListener('click', () => {
                    if (this.isMuted) {
                        this.unmute();
                    } else {
                        this.togglePlayPause();
                    }
                });
            }

            // Keyboard shortcut (Space = Play/Pause, Escape or Enter = Skip)
            window.addEventListener('keydown', (e) => {
                if (this.dom.overlay && !this.dom.overlay.classList.contains('dismissed')) {
                    if (e.code === 'Space') {
                        e.preventDefault();
                        this.togglePlayPause();
                    } else if (e.code === 'Escape' || e.code === 'Enter') {
                        this.dismissVideo();
                    }
                }
            });
        }

        start() {
            this.isPlaying = true;

            if (this.dom.overlay) {
                this.dom.overlay.classList.remove('dismissed');
            }

            // Play HTML5 video
            if (this.dom.videoEl) {
                this.dom.videoEl.currentTime = 0;
                this.dom.videoEl.muted = this.isMuted;
                const playPromise = this.dom.videoEl.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        this.dom.videoEl.muted = true;
                        this.dom.videoEl.play().catch(() => {});
                    });
                }
            }

            if (this.dom.unmutePrompt && this.isMuted) {
                this.dom.unmutePrompt.classList.add('visible');
            }

            this.updateUI();
        }

        updateUI() {
            const isTa = this.getLang() === 'ta';
            if (this.dom.skipText) {
                this.dom.skipText.textContent = isTa ? 'வீடியோவைத் தவிர் ⏭️' : 'Skip Video ⏭️';
            }
        }

        togglePlayPause() {
            this.isPlaying = !this.isPlaying;
            if (this.dom.videoEl) {
                if (this.isPlaying) {
                    this.dom.videoEl.play().catch(() => {});
                } else {
                    this.dom.videoEl.pause();
                }
            }
        }

        unmute() {
            this.isMuted = false;
            if (this.dom.videoEl) {
                this.dom.videoEl.muted = false;
            }
            if (this.dom.unmutePrompt) {
                this.dom.unmutePrompt.classList.remove('visible');
            }
        }

        dismissVideo() {
            this.isPlaying = false;
            if (this.dom.videoEl) {
                try {
                    this.dom.videoEl.pause();
                } catch (e) {}
            }

            if (this.dom.overlay) {
                this.dom.overlay.classList.add('dismissed');
            }

            if (typeof this.onDismiss === 'function') {
                this.onDismiss();
            }
        }

        openVideo() {
            if (this.dom.overlay) {
                this.dom.overlay.classList.remove('dismissed');
            }
            this.start();
        }
    }

    /* ==========================================================================
       5. APPLICATION CONTROLLER
       ========================================================================== */

    class AnniyanApp {
        constructor() {
            this.sound = new SoundEngine();
            this.currentLang = localStorage.getItem('anniyan_lang') || 'ta';
            this.activeCategory = 'bribery';
            this.currentVerdict = null;
            this.ledger = this.loadLedger();

            this.dom = {
                introGate: document.getElementById('introGate'),
                enterPortalBtn: document.getElementById('enterPortalBtn'),
                quickDirectBtn: document.getElementById('quickDirectBtn'),
                brandHomeBtn: document.getElementById('brandHomeBtn'),
                mainNav: document.getElementById('mainNav'),
                navBtns: document.querySelectorAll('.nav-btn'),
                sections: document.querySelectorAll('.portal-section'),
                reportForm: document.getElementById('reportForm'),
                culpritName: document.getElementById('culpritName'),
                culpritAge: document.getElementById('culpritAge'),
                crimeLocation: document.getElementById('crimeLocation'),
                crimeDetails: document.getElementById('crimeDetails'),
                categoryChips: document.querySelectorAll('.category-chip'),
                verdictModal: document.getElementById('verdictModal'),
                modalCloseBtn: document.getElementById('modalCloseBtn'),
                newComplaintModalBtn: document.getElementById('newComplaintModalBtn'),
                copyVerdictBtn: document.getElementById('copyVerdictBtn'),
                printVerdictBtn: document.getElementById('printVerdictBtn'),
                soundToggleBtn: document.getElementById('soundToggleBtn'),
                soundIcon: document.getElementById('soundIcon'),
                soundStatusText: document.getElementById('soundStatusText'),
                langToggleBtn: document.getElementById('langToggleBtn'),
                ledgerBadge: document.getElementById('ledgerBadge'),
                ledgerListContainer: document.getElementById('ledgerListContainer'),
                ledgerEmptyState: document.getElementById('ledgerEmptyState'),
                clearLedgerBtn: document.getElementById('clearLedgerBtn'),
                emptyToFormBtn: document.getElementById('emptyToFormBtn'),
                codexGridContainer: document.getElementById('codexGridContainer'),
                toastNotification: document.getElementById('toastNotification'),
                toastMsg: document.getElementById('toastMsg'),
                replayIntroBtn: document.getElementById('replayIntroBtn'),
                // Modal specific targets
                modalVerdictTitle: document.getElementById('modalVerdictTitle'),
                modalCaseId: document.getElementById('modalCaseId'),
                modalCulpritName: document.getElementById('modalCulpritName'),
                modalCulpritAge: document.getElementById('modalCulpritAge'),
                modalCrimeCat: document.getElementById('modalCrimeCat'),
                modalCrimeText: document.getElementById('modalCrimeText'),
                modalHellName: document.getElementById('modalHellName'),
                modalShloka: document.getElementById('modalShloka'),
                modalPunishmentDetail: document.getElementById('modalPunishmentDetail'),
                modalDateVal: document.getElementById('modalDateVal')
            };

            // Initialize Cinematic Movie Intro Video Player
            this.videoPlayer = new MovieIntroVideoPlayer(
                this.sound,
                () => this.currentLang,
                () => this.dismissGate()
            );

            this.init();
        }

        init() {
            // Init ambient background canvas
            new AmbientCanvas('ambientCanvas');

            // Render codex cards
            this.renderCodex();

            // Render ledger
            this.renderLedger();

            // Set Initial Language & Sound UI
            this.updateLanguageUI();
            this.updateSoundUI();

            // Bind Event Listeners
            this.bindEvents();
        }

        loadLedger() {
            try {
                const data = localStorage.getItem('anniyan_ledger');
                return data ? JSON.parse(data) : [];
            } catch (e) {
                return [];
            }
        }

        saveLedger() {
            try {
                localStorage.setItem('anniyan_ledger', JSON.stringify(this.ledger));
            } catch (e) {
                console.error('Save ledger error', e);
            }
        }

        bindEvents() {
            // Intro Gate triggers
            if (this.dom.enterPortalBtn) {
                this.dom.enterPortalBtn.addEventListener('click', () => {
                    this.sound.playThunderSting();
                    this.dismissGate();
                });
            }

            if (this.dom.quickDirectBtn) {
                this.dom.quickDirectBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    this.dismissGate();
                });
            }

            if (this.dom.brandHomeBtn) {
                this.dom.brandHomeBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    this.switchTab('complaintSection');
                });
            }

            // Replay Movie Intro Video from Navbar
            if (this.dom.replayIntroBtn) {
                this.dom.replayIntroBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    if (this.videoPlayer) {
                        this.videoPlayer.openVideo();
                    }
                });
            }

            // Tab Navigation
            this.dom.navBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.sound.playClick();
                    const targetId = btn.getAttribute('data-target');
                    this.switchTab(targetId);
                });
            });

            // Empty state helper button
            if (this.dom.emptyToFormBtn) {
                this.dom.emptyToFormBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    this.switchTab('complaintSection');
                });
            }

            // Category Chips
            this.dom.categoryChips.forEach(chip => {
                chip.addEventListener('click', () => {
                    this.sound.playClick();
                    this.dom.categoryChips.forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    this.activeCategory = chip.getAttribute('data-cat');
                });
            });

            // Form Submission
            if (this.dom.reportForm) {
                this.dom.reportForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleFormSubmit();
                });
            }

            // Sound Toggle
            if (this.dom.soundToggleBtn) {
                this.dom.soundToggleBtn.addEventListener('click', () => {
                    const isEnabled = this.sound.toggle();
                    this.updateSoundUI();
                    if (isEnabled) this.sound.playBellToll();
                });
            }

            // Language Toggle
            if (this.dom.langToggleBtn) {
                this.dom.langToggleBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    this.currentLang = this.currentLang === 'ta' ? 'en' : 'ta';
                    localStorage.setItem('anniyan_lang', this.currentLang);
                    this.updateLanguageUI();
                    this.renderCodex();
                    this.renderLedger();
                });
            }

            // Modal Interactions
            if (this.dom.modalCloseBtn) {
                this.dom.modalCloseBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    this.closeModal();
                });
            }

            if (this.dom.newComplaintModalBtn) {
                this.dom.newComplaintModalBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    this.closeModal();
                    this.resetForm();
                    this.switchTab('complaintSection');
                });
            }

            if (this.dom.copyVerdictBtn) {
                this.dom.copyVerdictBtn.addEventListener('click', () => {
                    this.copyVerdictToClipboard();
                });
            }

            if (this.dom.printVerdictBtn) {
                this.dom.printVerdictBtn.addEventListener('click', () => {
                    this.sound.playClick();
                    window.print();
                });
            }

            // Clear Ledger Button
            if (this.dom.clearLedgerBtn) {
                this.dom.clearLedgerBtn.addEventListener('click', () => {
                    const t = I18N[this.currentLang];
                    if (confirm(t.clearLedgerConfirm)) {
                        this.ledger = [];
                        this.saveLedger();
                        this.renderLedger();
                        this.showToast(t.toastDeleted);
                    }
                });
            }

            // Close modal on escape or background click
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.dom.verdictModal && !this.dom.verdictModal.classList.contains('hidden')) {
                    this.closeModal();
                }
            });

            if (this.dom.verdictModal) {
                this.dom.verdictModal.addEventListener('click', (e) => {
                    if (e.target === this.dom.verdictModal) {
                        this.closeModal();
                    }
                });
            }
        }

        dismissGate() {
            if (this.dom.introGate) {
                this.dom.introGate.classList.add('dismissed');
            }
        }

        switchTab(targetSectionId) {
            this.dom.navBtns.forEach(btn => {
                if (btn.getAttribute('data-target') === targetSectionId) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            this.dom.sections.forEach(sec => {
                if (sec.id === targetSectionId) {
                    sec.classList.remove('hidden');
                } else {
                    sec.classList.add('hidden');
                }
            });
        }

        setElText(id, text) {
            const el = document.getElementById(id);
            if (el && text !== undefined) {
                el.textContent = text;
            }
        }

        setElHtml(id, html) {
            const el = document.getElementById(id);
            if (el && html !== undefined) {
                el.innerHTML = html;
            }
        }

        updateSoundUI() {
            const isEnabled = this.sound.enabled;
            const t = I18N[this.currentLang];
            if (this.dom.soundIcon) {
                this.dom.soundIcon.textContent = isEnabled ? '🔊' : '🔇';
            }
            if (this.dom.soundStatusText && t) {
                this.dom.soundStatusText.textContent = isEnabled ? t.soundOn : t.soundOff;
            }
        }

        updateLanguageUI() {
            const t = I18N[this.currentLang];
            if (!t) return;

            // Brand
            this.setElHtml('txtBrandTitle', t.brandTitle.replace('.COM', '<span class="dot-com">.COM</span>'));
            this.setElText('txtBrandTagline', t.brandTagline);

            // Nav
            this.setElText('txtNavReport', t.navReport);
            this.setElText('txtNavCodex', t.navCodex);
            this.setElText('txtNavLedger', t.navLedger);
            this.setElText('txtNavVideo', t.navVideo);

            // YouTube Video Player title
            this.setElText('ytVideoTitle', t.ytTitle);
            if (this.videoPlayer) {
                this.videoPlayer.updateUI();
            }

            // Gate
            this.setElText('txtGateTitle', t.gateTitle);
            this.setElHtml('txtGateQuote', t.gateQuote.replace('\n', '<br>'));
            this.setElText('txtGateSubtext', t.gateSubtext);
            this.setElText('txtEnterPortal', t.enterPortal);
            this.setElText('txtQuickDirect', t.quickDirect);

            // Form
            this.setElText('txtBadgeForm', t.badgeForm);
            this.setElText('txtFormHeading', t.formHeading);
            this.setElText('txtFormSub', t.formSub);
            this.setElText('lblCulpritName', t.lblCulpritName);
            this.setElText('lblCulpritAge', t.lblCulpritAge);
            this.setElText('lblLocation', t.lblLocation);
            this.setElText('lblCategory', t.lblCategory);
            this.setElText('lblDetails', t.lblDetails);
            this.setElText('lblSeverity', t.lblSeverity);
            this.setElText('sevModerate', t.sevModerate);
            this.setElText('sevSevere', t.sevSevere);
            this.setElText('sevExtreme', t.sevExtreme);
            this.setElText('txtSubmitBtn', t.submitBtn);

            // Side Info
            this.setElText('txtRuleTitle', t.ruleTitle);
            this.setElText('txtRulePara', t.rulePara);
            this.setElText('txtStatLabel', t.statLabel);

            // Codex & Ledger headings
            this.setElText('txtCodexHeading', t.codexHeading);
            this.setElText('txtCodexDesc', t.codexDesc);
            this.setElText('txtLedgerHeading', t.ledgerHeading);
            this.setElText('txtLedgerDesc', t.ledgerDesc);
            this.setElText('txtEmptyTitle', t.emptyTitle);
            this.setElText('txtEmptyDesc', t.emptyDesc);

            // Modal static labels
            this.setElText('modalVerdictTitle', t.verdictTitle);
            this.setElText('txtVerdictCulpritLbl', t.verdictCulpritLbl);
            this.setElText('txtVerdictAgeLbl', t.verdictAgeLbl);
            this.setElText('txtVerdictCategoryLbl', t.verdictCategoryLbl);
            this.setElText('txtVerdictCrimeLbl', t.verdictCrimeLbl);
            this.setElText('txtVerdictHellType', t.verdictHellType);
            this.setElText('modalWarningTxt', t.modalWarning);

            // Language button label
            if (this.dom.langToggleBtn) {
                const langCodeEl = this.dom.langToggleBtn.querySelector('.lang-code');
                const langTxtEl = this.dom.langToggleBtn.querySelector('.action-btn-text');
                if (langCodeEl) {
                    langCodeEl.textContent = this.currentLang === 'ta' ? 'EN' : 'தமிழ்';
                }
                if (langTxtEl) {
                    langTxtEl.textContent = this.currentLang === 'ta' ? 'English' : 'தமிழ்';
                }
            }

            this.updateSoundUI();
        }

        /* ==========================================================================
           6. COMPLAINT & VERDICT MATCHING
           ========================================================================== */

        handleFormSubmit() {
            const name = this.dom.culpritName.value.trim();
            const age = parseInt(this.dom.culpritAge.value, 10);
            const location = this.dom.crimeLocation.value.trim() || (this.currentLang === 'ta' ? 'தமிழ்நாடு' : 'Tamil Nadu');
            const details = this.dom.crimeDetails.value.trim();
            const severityEl = document.querySelector('input[name="severity"]:checked');
            const severity = severityEl ? severityEl.value : 'severe';

            if (!name || isNaN(age) || details.length < 5) {
                this.showToast(I18N[this.currentLang].formValidationErr);
                return;
            }

            // Match Garuda Purana Punishment
            const assignedHell = this.matchGarudaHell(this.activeCategory, details, severity);
            
            // Generate Case ID
            const randomCaseNumber = Math.floor(1000 + Math.random() * 9000);
            const caseId = `CASE #ANN-2026-${randomCaseNumber}`;
            const dateStr = new Date().toLocaleDateString(this.currentLang === 'ta' ? 'ta-IN' : 'en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            const verdictData = {
                id: 'ANN-' + Date.now(),
                caseId: caseId,
                name: name,
                age: age,
                location: location,
                category: this.activeCategory,
                details: details,
                severity: severity,
                hellId: assignedHell.id,
                assignedHell: assignedHell,
                date: dateStr,
                timestamp: Date.now()
            };

            this.currentVerdict = verdictData;

            // Save to Ledger
            this.ledger.unshift(verdictData);
            this.saveLedger();
            this.renderLedger();

            // Play Cinematic Thunder
            this.sound.playThunderSting();

            // Display Verdict Modal
            this.showVerdictModal(verdictData);
        }

        matchGarudaHell(category, details, severity) {
            const text = details.toLowerCase();

            // 1. Direct keyword override checks for authentic Garuda lore
            if (text.includes('எண்ணெய்') || text.includes('லஞ்சம்') || text.includes('bribe') || text.includes('money') || category === 'bribery') {
                return GARUDA_HELLS.find(h => h.id === 'kumbhipaka') || GARUDA_HELLS[0];
            }
            if (text.includes('உணவு') || text.includes('மருந்து') || text.includes('food') || text.includes('poison') || category === 'adulteration') {
                return GARUDA_HELLS.find(h => h.id === 'krimibhojanam') || GARUDA_HELLS[1];
            }
            if (text.includes('விபத்து') || text.includes('பாம்பு') || text.includes('road') || text.includes('accident') || category === 'negligence') {
                return GARUDA_HELLS.find(h => h.id === 'andhakupa') || GARUDA_HELLS[2];
            }
            if (text.includes('ஏமாற்று') || text.includes('துரோகம்') || text.includes('fraud') || category === 'fraud') {
                return GARUDA_HELLS.find(h => h.id === 'suchimukha') || GARUDA_HELLS[3];
            }
            if (text.includes('பொது') || text.includes('ரயில்') || text.includes('infrastructure') || category === 'civic') {
                return GARUDA_HELLS.find(h => h.id === 'rauravam') || GARUDA_HELLS[4];
            }
            if (category === 'traffic') {
                return GARUDA_HELLS.find(h => h.id === 'vaitarani') || GARUDA_HELLS[5];
            }

            // Default selection based on hash
            const index = Math.abs(this.hashCode(text)) % GARUDA_HELLS.length;
            return GARUDA_HELLS[index];
        }

        hashCode(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = (hash << 5) - hash + str.charCodeAt(i);
                hash |= 0;
            }
            return hash;
        }

        showVerdictModal(verdict) {
            if (!verdict) return;
            const isTa = this.currentLang === 'ta';
            const hell = verdict.assignedHell;

            if (this.dom.modalCaseId) this.dom.modalCaseId.textContent = verdict.caseId || '';
            if (this.dom.modalCulpritName) this.dom.modalCulpritName.textContent = `${verdict.name} (${verdict.location})`;
            if (this.dom.modalCulpritAge) this.dom.modalCulpritAge.textContent = `${verdict.age} ${isTa ? 'வயது' : 'Yrs'}`;
            if (this.dom.modalCrimeCat) this.dom.modalCrimeCat.textContent = this.getCategoryLabel(verdict.category);
            if (this.dom.modalCrimeText) this.dom.modalCrimeText.textContent = verdict.details || '';

            if (hell) {
                if (this.dom.modalHellName) this.dom.modalHellName.textContent = isTa ? hell.nameTa : hell.nameEn;
                if (this.dom.modalShloka) this.dom.modalShloka.textContent = hell.shloka || '';
                if (this.dom.modalPunishmentDetail) this.dom.modalPunishmentDetail.textContent = isTa ? hell.punishmentTa : hell.punishmentEn;
            }
            if (this.dom.modalDateVal) this.dom.modalDateVal.textContent = verdict.date || '';

            if (this.dom.verdictModal) this.dom.verdictModal.classList.remove('hidden');
        }

        closeModal() {
            if (this.dom.verdictModal) this.dom.verdictModal.classList.add('hidden');
        }

        resetForm() {
            this.dom.reportForm.reset();
            this.dom.categoryChips.forEach((c, idx) => {
                if (idx === 0) {
                    c.classList.add('active');
                    this.activeCategory = c.getAttribute('data-cat');
                } else {
                    c.classList.remove('active');
                }
            });
        }

        getCategoryLabel(catKey) {
            const isTa = this.currentLang === 'ta';
            const map = {
                bribery: isTa ? 'லஞ்சம் & ஊழல்' : 'Bribery & Corruption',
                adulteration: isTa ? 'உணவு கலப்படம்' : 'Food Adulteration',
                negligence: isTa ? 'உயிர் அலட்சியம்' : 'Fatal Negligence',
                fraud: isTa ? 'ஏமாற்றுதல் & மோசடி' : 'Fraud & Forgery',
                traffic: isTa ? 'விபத்து & விதிமீறல்' : 'Traffic Violation',
                civic: isTa ? 'பொது நல துரோகம்' : 'Civic Duty Breach'
            };
            return map[catKey] || catKey;
        }

        copyVerdictToClipboard() {
            if (!this.currentVerdict) return;
            const v = this.currentVerdict;
            const isTa = this.currentLang === 'ta';
            const hell = v.assignedHell;

            const text = `💀 ${isTa ? 'அந்நியன் தீர்ப்பு ஆவணம்' : 'ANNIYAN VERDICT CERTIFICATE'} 💀\n` +
                `----------------------------------------\n` +
                `Case ID: ${v.caseId}\n` +
                `${isTa ? 'குற்றவாளி' : 'Offender'}: ${v.name} (${v.age} yrs, ${v.location})\n` +
                `${isTa ? 'குற்ற வகை' : 'Category'}: ${this.getCategoryLabel(v.category)}\n` +
                `${isTa ? 'குற்ற விவரம்' : 'Details'}: ${v.details}\n\n` +
                `${isTa ? 'கருட புராண நரகம்' : 'Assigned Hell'}: ${isTa ? hell.nameTa : hell.nameEn}\n` +
                `Shloka: ${hell.shloka}\n` +
                `${isTa ? 'தண்டனை' : 'Punishment'}: ${isTa ? hell.punishmentTa : hell.punishmentEn}\n\n` +
                `"தவறு செய்பவன் யாராக இருந்தாலும் அந்நியனின் தண்டனையிலிருந்து தப்ப முடியாது!"\n` +
                `portal: anniyan.com`;

            navigator.clipboard.writeText(text).then(() => {
                this.sound.playBellToll();
                this.showToast(I18N[this.currentLang].copySuccess);
            }).catch(() => {
                this.showToast('Copied!');
            });
        }

        /* ==========================================================================
           7. CODEX & LEDGER RENDERING
           ========================================================================== */

        renderCodex() {
            if (!this.dom.codexGridContainer) return;
            const isTa = this.currentLang === 'ta';

            this.dom.codexGridContainer.innerHTML = GARUDA_HELLS.map((hell, index) => `
                <div class="codex-card" id="codex-card-${hell.id}">
                    <div class="codex-card-header">
                        <span class="codex-icon">${hell.icon}</span>
                        <span class="codex-rank">நரகம் #${index + 1}</span>
                    </div>
                    <h3 class="codex-name">${isTa ? hell.nameTa : hell.nameEn}</h3>
                    <div class="codex-sanskrit">${hell.shloka}</div>
                    <div class="codex-sin-box">
                        <span class="codex-sin-lbl">${isTa ? 'செய்யப்படும் பாவம்:' : 'Targeted Sin:'}</span>
                        <p class="codex-sin-text">${isTa ? hell.sinsTa : hell.sinsEn}</p>
                    </div>
                    <p class="codex-punish-text">${isTa ? hell.punishmentTa : hell.punishmentEn}</p>
                </div>
            `).join('');
        }

        renderLedger() {
            const count = this.ledger.length;
            if (this.dom.ledgerBadge) {
                this.dom.ledgerBadge.textContent = count;
            }

            if (count === 0) {
                if (this.dom.ledgerEmptyState) this.dom.ledgerEmptyState.classList.remove('hidden');
                if (this.dom.ledgerListContainer) this.dom.ledgerListContainer.classList.add('hidden');
                return;
            }

            if (this.dom.ledgerEmptyState) this.dom.ledgerEmptyState.classList.add('hidden');
            if (this.dom.ledgerListContainer) {
                this.dom.ledgerListContainer.classList.remove('hidden');
                const isTa = this.currentLang === 'ta';

                this.dom.ledgerListContainer.innerHTML = this.ledger.map((item, index) => {
                    const hell = item.assignedHell || GARUDA_HELLS.find(h => h.id === item.hellId) || GARUDA_HELLS[0];
                    return `
                        <div class="ledger-item-card" id="ledger-item-${item.id}">
                            <div class="ledger-card-top">
                                <span class="ledger-case-id">${item.caseId}</span>
                                <span class="ledger-date">${item.date}</span>
                            </div>
                            <div class="ledger-culprit">${item.name} (${item.age})</div>
                            <div class="ledger-crime-desc">${item.details}</div>
                            <div class="ledger-verdict-badge">
                                <span>${hell.icon}</span>
                                <span>${isTa ? hell.nameTa : hell.nameEn}</span>
                            </div>
                            <div class="ledger-card-footer">
                                <button class="view-verdict-link" data-ledger-id="${item.id}">
                                    <span>👁️ ${isTa ? 'தீர்ப்பைக் காண்க' : 'View Verdict'}</span>
                                </button>
                                <button class="del-record-btn" data-del-id="${item.id}" title="Delete">
                                    <span>🗑️</span>
                                </button>
                            </div>
                        </div>
                    `;
                }).join('');

                // Bind click events on generated cards
                this.dom.ledgerListContainer.querySelectorAll('.view-verdict-link').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const id = btn.getAttribute('data-ledger-id');
                        const item = this.ledger.find(i => i.id === id);
                        if (item) {
                            this.sound.playClick();
                            this.currentVerdict = item;
                            this.showVerdictModal(item);
                        }
                    });
                });

                this.dom.ledgerListContainer.querySelectorAll('.del-record-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const id = btn.getAttribute('data-del-id');
                        this.ledger = this.ledger.filter(i => i.id !== id);
                        this.saveLedger();
                        this.renderLedger();
                        this.showToast(I18N[this.currentLang].toastDeleted);
                    });
                });
            }
        }

        showToast(msg) {
            if (!this.dom.toastNotification) return;
            this.dom.toastMsg.textContent = msg;
            this.dom.toastNotification.classList.remove('hidden');

            if (this.toastTimeout) clearTimeout(this.toastTimeout);
            this.toastTimeout = setTimeout(() => {
                this.dom.toastNotification.classList.add('hidden');
            }, 3000);
        }
    }

    // Launch Applet on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new AnniyanApp());
    } else {
        new AnniyanApp();
    }
})();
