const wordsGroups = [
    ["abound", "amorphous", "austere", "belie", "capricious", "cerebral", "congenial", "conspicuous", "cursory", "daunting",
     "deify", "didactic", "disseminate", "feasible", "flout", "homogeneous", "humdrum", "insipid", "loquacious", "misanthropic",
     "misnomer", "negligent", "obsequious", "placate", "proclivity", "puerile", "quixotic", "spendthrift", "taciturn", "wary"],
    ["adulterate", "advocate", "aggrandize", "alacrity", "ambivalent", "ameliorate", "amenable", "anachronistic", "audacious", "avaricious",
     "banal", "benign", "brazen", "calumny", "candid", "castigate", "caustic", "construe", "contrite", "convoluted",
     "covet", "craven", "decorum", "deft", "demur", "derivative", "desiccate", "diatribe", "incredulous", "ingenuous"],
    ["abate", "abjure", "anomalous", "antipathy", "arcane", "arduous", "artless", "ascetic", "assuage", "betray",
     "bucolic", "burgeon", "cacophonous", "canonize", "censure", "chicanery", "coalesce", "cogent", "compelling", "contend",
     "copious", "cosmopolitan", "deference", "desultory", "diffident", "dilatory", "equivocate", "polarize", "prodigal", "verbose"],
    ["abstain", "approbation", "cherish", "corroborate", "disparate", "emulate", "enervate", "ephemeral", "fervid", "garrulous",
     "incendiary", "inimical", "intimate", "invigorate", "mitigate", "obsolete", "opaque", "paradigmatic", "pedantic", "placid",
     "polemical", "precipitate", "profundity", "prophetic", "prudent", "punctilious", "recondite", "scrupulous", "tranquil", "vacillate"],
    ["aloof", "clangor", "conventional", "debunk", "diminutive", "discernible", "enigmatic", "estranged", "extravagant", "fanciful",
     "frivolous", "heterogeneous", "imperious", "impertinent", "invasive", "irresolute", "laudable", "lax", "marginalize", "panache",
     "plodding", "prosaic", "remedial", "restive", "sporadic", "stigmatize", "undermine", "utterly", "weary", "zealous"],
  
    ["admonish", "aesthetic", "affectation", "alleviate", "analogous", "bolster", "chauvinistic", "connoisseur", "dissemble", "dogged",
     "dupe", "empirical", "engender", "entitled", "pertinacious", "presumptuous", "probity", "proliferate", "specious", "spurious",
     "subjective", "subvert", "timorous", "tortuous", "tractable", "transient", "ubiquitous", "underscore", "venal", "venerate"],
       ["appease", "arbitrary", "archaic", "clamorous", "dearth", "explicable", "hyperbole", "immutable", "indefatigable", "indolent", "insular", "intransigent", "intrepid", "irreverent", "loathe", "malign", "malleable", "neophyte", "plastic", "platitude", "prescient", "pristine", "reproach", "robust", "salubrious", "sanction", "sedulous", "soporific", "stern", "tendentious"],
    ["accentuate", "conjectural", "convivial", "decadent", "egregious", "evanescent", "flamboyant", "forestall", "gainsay", "galvanize", "indiscriminate", "innocuous", "momentary", "mundane", "nettlesome", "nullify", "obviate", "omnipresent", "oust", "palpable", "perfidy", "profuse", "pugnacious", "sagacious", "sanguine", "scant", "skullduggery", "trivial", "utilitarian", "vapid"],
     ["boorish", "brook", "circumspect", "comity", "commensurate", "cordial", "deleterious", "dichotomy", "edify", "elicit", "erudite", "fecund", "feeble", "felicitous", "forbear", "haphazard", "hodgepodge", "impede", "impetuous", "irascible", "mercenary", "meticulous", "mordant", "outstrip", "precarious", "quirky", "repudiate", "tact", "trifling", "turbulent"],
    ["acumen", "antithesis", "ascribe", "befuddled", "eschew", "esoteric", "evasive", "exculpate", "expedite", "fastidious", "feign", "furtive", "hamper", "indispensable", "lament", "myopic", "nonchalant", "partial", "pensive", "portend", "provincial", "rudimentary", "salutary", "sever", "slight", "somnolent", "stoic", "supersede", "tout", "wane"],
 ["abhor", "boisterous", "chivalrous", "churlish", "clandestine", "complacent", "cumbersome", "debilitating", "deliberate", "droll", "eccentric", "fractious", "limpid", "mawkish", "obeisance", "ostentatious", "panacea", "perfunctory", "perilous", "pervasive", "preclude", "predilection", "rapacious", "relish", "satirical", "sham", "skirt", "sluggish", "spartan", "truculent"],
    ["acrimonious", "belligerent", "beneficent", "canny", "cavalier", "distressed", "dwindling", "eclipse", "encyclopedic", "exacerbate", "exasperated", "fungible", "hackneyed", "incongruous", "interchangeable", "laconic", "lucrative", "magisterial", "onerous", "opprobrium", "parsimonious", "peripheral", "provocative", "renounce", "tempestuous", "tenable", "transgression", "urbane", "verisimilitude", "vitiate"],
 ["affinity", "altruistic", "baroque", "byzantine", "compromise", "conciliatory", "countenance", "covert", "credible", "diffuse", "documentary", "exhaustive", "exhilarating", "extraneous", "fervor", "futile", "illusory", "invidious", "lethargic", "metaphorical", "mimic", "numinous", "obscure", "overt", "pellucid", "perpetuate", "rational", "scathing", "subtle", "superficial"],
    ["acquiesce", "adroit", "amend", "animus", "apologist", "astringent", "collaborate", "competent", "correlate", "deride", "dictate", "discreet", "divorced", "elitist", "exacting", "flummoxed", "fruitful", "inborn", "polymath", "reticent", "stringent", "subservient", "surreptitious", "tantalizing", "tantamount", "torpor", "trenchant", "umbrage", "versatile", "wayward"],
 ["alienate", "apathy", "apropos", "apt", "cloak", "consensus", "distort", "divergent", "elated", "enchant", "entrenched", "exotic", "exploitative", "foreseeable", "forsake", "gratify", "heed", "judicious", "lucid", "pertinent", "propriety", "scintillating", "sensational", "sophisticated", "strife", "understated", "unscrupulous", "veracity", "virulent", "volatile"],
 ["antedate", "banish", "bridle", "comply", "crestfallen", "curtail", "elucidate", "evade", "feckless", "fester", "iconoclastic", "immure", "improvise", "inhibit", "inscrutable", "lionize", "monotonous", "peculiar", "premeditate", "profligate", "reconcile", "refine", "relinquish", "ruminate", "skittish", "superfluous", "synoptic", "thorough", "visionary", "vociferous"],
 ["acclaim", "ascertain", "assertive", "bogus", "cataclysmic", "circumscribe", "complementary", "contentious", "disingenuous", "divulge", "dogmatic", "fallacious", "foolhardy", "hinder", "impair", "impugn", "incessant", "inclined", "inveterate", "miserly", "patent", "petulant", "pithy", "pliant", "sanctimonious", "sound", "tarnish", "tepid", "upbraid", "vexation"],
 ["abet", "accessible", "acquisitive", "amalgamate", "attenuate", "augment", "aversion", "blithe", "contempt", "dawdle", "deflect", "discount", "dissident", "efficacious", "equitable", "erratic", "industrious", "inform", "irksome", "manacle", "modest", "noxious", "pernicious", "predicament", "proficient", "prolix", "scorn", "subordinate", "unseemly", "veritable"],
 ["acolyte", "anoint", "base", "coercion", "coin", "cunning", "discomfit", "dissent", "distill", "dubious", "ebullient", "facetious", "fallible", "florid", "gawky", "inveigle", "jettison", "mendacity", "munificent", "naive", "noble", "parochial", "pedestrian", "prevaricate", "prime", "radical", "recrudescent", "temporal", "transitory", "viable"],
    ["abreast", "confound", "digression", "discrepancy", "duplicitous", "expedient", "fabricate", "glum", "harbinger", "intrinsic", "largesse", "libertine", "malfeasance", "manifest", "minute", "modish", "nascent", "perennial", "pious", "providential", "prowess", "schism", "slander", "stalwart", "supplicate", "terse", "tirade", "universal", "vanquish", "woeful"],
 ["abject", "amicable", "animosity", "aver", "barrage", "cathartic", "decipher", "delusion", "dispense", "eloquent", "enthrall", "eradicate", "fledgling", "fortitude", "fortuitous", "goad", "imminent", "incontrovertible", "itinerant", "magnanimous", "meritorious", "mutiny", "paradoxical", "perseverance", "render", "repertoire", "resilient", "resolute", "supple", "valor"],
    ["arresting", "chastise", "cumbersome", "economy", "elementary", "embellish", "euphoric", "exonerate", "extrapolate", "falter", "fervent", "foment", "gaffe", "heterodox", "histrionic", "implicit", "inviolate", "liability", "obstinate", "painstaking", "phlegmatic", "prodigious", "propensity", "qualm", "renege", "stinting", "temper", "tentative", "unprecedented", "vivacious"],
    ["allusive", "astute", "commence", "convalescent", "curb", "decry", "duress", "evoke", "fawn", "fret", "glib", "headstrong", "intermittent", "ire", "languid", "lull", "mettlesome", "mollify", "neutralize", "nonplussed", "precipitous", "pretentious", "profound", "propagate", "recourse", "refute", "regress", "repercussion", "replenish", "vigilant"],
    ["assail", "benevolent", "berate", "buoyant", "buttress", "condone", "contravene", "denounce", "despotic", "deviate", "disinterested", "escalate", "exorcise", "finicky", "foil", "intertwined", "inundate", "ironclad", "jeopardize", "mercurial", "oblivious", "perpetrate", "plaintive", "poignant", "quiescent", "reiterate", "subside", "subsume", "surmount", "tangential"],
 ["adept", "adverse", "appropriate", "archetype", "articulate", "auspicious", "bereft", "captious", "conclusive", "conspire", "delineate", "disentangle", "exhort", "frailty", "grievance", "harangue", "ploy", "poise", "pomposity", "proxy", "relent", "rhetoric", "rigor", "sparse", "steadfast", "suspect", "tedious", "vitality", "whimsical", "yield"],
 ["apprehension", "ardent", "axiomatic", "cease", "conducive", "corporeal", "doctrinaire", "eclectic", "equanimity", "exorbitant", "fickle", "figurative", "flustered", "gullible", "idiosyncratic", "incidental", "ingrained", "insolent", "lampoon", "lavish", "lugubrious", "macabre", "morose", "officious", "ramification", "serene", "supplant", "tacit", "transcend", "treatise"],
 ["antagonize", "barren", "bombastic", "cajole", "chary", "curmudgeon", "dirge", "estimable", "euphemism", "excoriate", "exigent", "haughty", "heady", "imperturbable", "implacable", "lambaste", "miscreant", "peccadillo", "philistine", "relegate", "repugnant", "sentimental", "squander", "swindle", "tangible", "turpitude", "unalloyed", "undercut", "wheedle", "xenophobic"],
 ["abeyance", "abstract", "affront", "agitate", "august", "burnish", "coy", "deprecate", "disdain", "disperse", "distend", "endemic", "enmity", "gauche", "hysterical", "impudent", "inchoate", "penchant", "quandary", "quarantine", "quash", "quibble", "ravage", "recant", "redoubtable", "retiring", "shrill", "sophistry", "substantiate", "wily"],
    ["abscond", "apogee", "aspersion", "bawdy", "chagrin", "collude", "commiserate", "conflagration", "contretemps", "conviction", "croon", "depose", "detente", "dowdy", "echelon", "ennui", "expatiate", "fraught", "fulcrum", "imbroglio", "jocund", "languish", "nadir", "nimble", "ominous", "outlandish", "propitious", "prurient", "sadistic", "zenith"],
    ["aberrant", "abide", "bravado", "callow", "capitulate", "cogitate", "deportment", "extemporize", "factious", "fallow", "feint", "flagrant", "gratuitous", "grovel", "indecorous", "intrigue", "nominal", "obdurate", "obstreperous", "odious", "plucky", "precocious", "remuneration", "slovenly", "soliloquy", "spurn", "stolid", "temerity", "tenuous", "verve"],
 ["abrogate", "aghast", "apprise", "beguile", "boon", "callous", "coddle", "crescendo", "extenuating", "frenetic", "fringe", "hapless", "immaculate", "obfuscate", "ossify", "pastiche", "perspicacious", "ponderous", "recluse", "retaliate", "rhapsody", "serendipitous", "shirk", "sinecure", "sinuous", "sordid", "stanch", "surfeit", "ulterior", "voluble"],
 ["abstruse", "auxiliary", "caricature", "depravity", "dilettante", "effrontery", "encroach", "endow", "entreat", "gregarious", "indictment", "indignant", "ineluctable", "inquisitive", "latitude", "levity", "malevolent", "mediate", "occlude", "pacify", "paragon", "patronize", "penurious", "piquant", "rampant", "remote", "reprobate", "turbid", "turgid", "vacuous"],
 ["affluent", "allegorical", "allude", "amplify", "catastrophic", "contemporary", "conundrum", "defame", "detract", "detrimental", "devious", "dormant", "draconian", "egalitarian", "elusive", "erstwhile", "gloat", "harrowing", "indefinite", "ingenious", "keen", "multifaceted", "omniscient", "remarkable", "sober", "stem from", "subdued", "token", "unravel", "withstand"],
 ["abrasive", "artful", "avert", "avid", "brevity", "bromide", "circumstantial", "cloying", "counterfeit", "denigrate", "disciple", "extol", "forebode", "ideologue", "impediment", "imperative", "impulsive", "interminable", "intuitive", "lassitude", "omit", "ornate", "paltry", "pejorative", "prefigure", "presage", "prescribe", "prevail", "propitiate", "recapitulate"],
 ["aplomb", "apposite", "beholden", "belittle", "cluster", "coherent", "contemplate", "crafty", "dismantle", "elaborate", "exegesis", "forgo", "impenetrable", "impervious", "inalienable", "inept", "martinet", "narcissism", "objurgation", "passable", "penetrating", "picturesque", "reflect", "resourceful", "retrench", "self-indulgent", "speculate", "staid", "suppress", "vestigial"],
    ["accord", "ad hoc", "adhere", "all-ecompassing", "aphorism", "benchmark", "blighted", "content", "debase", "disconcerting", "extant", "facility", "fitful", "incite", "induce", "infelicity", "intelligible", "makeshift", "onetime", "opportunistic", "plausible", "posturing", "potent", "redundant", "sacrosanct", "shrewd", "unadorned", "valedictory", "warranted", "wistful"],
 ["attribute", "calamitous", "censor", "champion", "compound", "deter", "dexterous", "dictum", "dutiful", "empathetic", "ensue", "fathom", "frank", "germane", "grumble", "hidebound", "hypocrite", "impolitic", "insidious", "intermediary", "passive", "raillery", "ramble", "resent", "residual", "resolve", "surrogate", "vilify", "wanting", "willful"],
 ["querulous", "phony", "check"]

    // Add more groups as needed
];

let currentGroupIndex = 0; // This will store the index of the last clicked group
let currentWordIndex = 0;
const originalWordsGroups = JSON.parse(JSON.stringify(wordsGroups));

const mainContent = document.getElementById('main-content');

function displayWords() {
    mainContent.innerHTML = ''; // Clear existing content
    wordsGroups.forEach((group, groupIndex) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';
        groupDiv.dataset.groupIndex = groupIndex; // Add data attribute for group index

        const groupTitle = document.createElement('h2');
        groupTitle.innerText = `Group ${groupIndex + 1}`;
        groupDiv.appendChild(groupTitle);

        group.forEach((word, wordIndex) => {
            const wordItem = document.createElement('div');
            wordItem.className = 'word-item';
            wordItem.innerText = word;
            wordItem.dataset.group = groupIndex;
            wordItem.dataset.index = wordIndex;
            groupDiv.appendChild(wordItem);
        });
        mainContent.appendChild(groupDiv);
    });
    highlightCurrentWord(); // Highlight the current word after rendering the groups
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleCurrentGroup() {
    wordsGroups[currentGroupIndex] = shuffleArray([...wordsGroups[currentGroupIndex]]);
    displayWords();
    highlightCurrentWord(); // Ensure the current word is highlighted after shuffling
}

function shuffleAllWords() {
    // Flatten the array to get all words in a single array
    const allWords = wordsGroups.flat();
    console.log("All words before shuffle:", allWords);

    // Shuffle the array of words
    shuffleArray(allWords);
    console.log("All words after shuffle:", allWords);

    // Distribute shuffled words back into the groups
    for (let i = 0; i < wordsGroups.length; i++) {
        wordsGroups[i] = allWords.slice(i * 30, (i + 1) * 30);
    }

    // Display the shuffled words
    displayWords();
    highlightCurrentWord(); // Ensure the current word is highlighted after shuffling
}

function promptShuffleSpecificGroups() {
    const groupIndices = prompt("Enter the group numbers to shuffle, separated by commas or hyphens for ranges (e.g., 1,2,3 or 1-5,7-10):");
    if (groupIndices) {
        const indicesArray = parseGroupIndices(groupIndices);
        shuffleSpecificGroups(indicesArray);
    }
}

function parseGroupIndices(groupIndices) {
    const indicesArray = [];
    const parts = groupIndices.split(',');
    
    parts.forEach(part => {
        if (part.includes('-')) {
            const [start, end] = part.split('-').map(Number);
            for (let i = start; i <= end; i++) {
                indicesArray.push(i - 1); // Convert to zero-based index
            }
        } else {
            indicesArray.push(Number(part) - 1); // Convert to zero-based index
        }
    });

    return indicesArray;
}

function shuffleSpecificGroups(groupIndices) {
    let wordsToShuffle = [];

    // Collect all words from the specified groups
    groupIndices.forEach(groupIndex => {
        if (groupIndex >= 0 && groupIndex < wordsGroups.length) {
            wordsToShuffle = wordsToShuffle.concat(wordsGroups[groupIndex]);
        }
    });

    // Shuffle the collected words
    shuffleArray(wordsToShuffle);

    // Redistribute the shuffled words back to the specified groups
    groupIndices.forEach(groupIndex => {
        if (groupIndex >= 0 && groupIndex < wordsGroups.length) {
            wordsGroups[groupIndex] = wordsToShuffle.splice(0, wordsGroups[groupIndex].length);
        }
    });

    displayWords();
    highlightCurrentWord(); // Ensure the current word is highlighted after shuffling
}

function resetCurrentShuffle() {
    wordsGroups[currentGroupIndex] = JSON.parse(JSON.stringify(originalWordsGroups[currentGroupIndex]));
    displayWords();
    highlightCurrentWord(); // Ensure the current word is highlighted after resetting
}

function resetAllShuffles() {
    for (let i = 0; i < wordsGroups.length; i++) {
        wordsGroups[i] = JSON.parse(JSON.stringify(originalWordsGroups[i]));
    }
    displayWords();
    highlightCurrentWord(); // Ensure the current word is highlighted after resetting
}

function resetEverything() {
    resetAllShuffles();
    resetAllMarks();
}

function resetAllMarks() {
    document.querySelectorAll('.word-item').forEach(item => {
        item.classList.remove('green', 'red', 'selected');
    });
    currentWordIndex = 0;
    highlightCurrentWord();
}

function handleKeyPress(event) {
    if (event.key === 'g') {
        markWord('green');
    } else if (event.key === 'h') {
        markWord('red');
    } else if (event.key === 'ArrowRight') {
        moveToNextGroup(); // Move to next group (modified)
    } else if (event.key === 'ArrowLeft') {
        moveToPreviousGroup(); // Move to previous group (modified)
    } else if (event.key === 'ArrowUp') {
        movePreviousWordInGroup(); // Move to previous word within group
    } else if (event.key === 'ArrowDown') {
        moveNextWordInGroup(); // Move to next word within group
    }
}

function markWord(color) {
    const currentWord = document.querySelector(`.word-item[data-group="${currentGroupIndex}"][data-index="${currentWordIndex}"]`);
    currentWord.classList.toggle(color);
}

function highlightCurrentWord() {
    document.querySelectorAll('.word-item').forEach((item) => {
        item.classList.remove('selected');
    });
    const currentWord = document.querySelector(`.word-item[data-group="${currentGroupIndex}"][data-index="${currentWordIndex}"]`);
    if (currentWord) {
        currentWord.classList.add('selected');
    }
}

// Function to move to the next group
function moveToNextGroup() {
    if (currentGroupIndex < wordsGroups.length - 1) {
        currentGroupIndex++; // Increment index for the next group

        // Ensure currentWordIndex is within bounds of the new group
        if (currentWordIndex >= wordsGroups[currentGroupIndex].length) {
            currentWordIndex = wordsGroups[currentGroupIndex].length - 1;
        }

        highlightCurrentWord();
    }
}

// Function to move to the previous group
function moveToPreviousGroup() {
    if (currentGroupIndex > 0) {
        currentGroupIndex--; // Decrement index for the previous group

        // Ensure currentWordIndex is within bounds of the new group
        if (currentWordIndex >= wordsGroups[currentGroupIndex].length) {
            currentWordIndex = wordsGroups[currentGroupIndex].length - 1;
        }

        highlightCurrentWord();
    }
}

// Function to move to the next word within the current group
function moveNextWordInGroup() {
    if (currentWordIndex < wordsGroups[currentGroupIndex].length - 1) {
        currentWordIndex++; // Increment index for the next word
        highlightCurrentWord();
    }
}

// Function to move to the previous word within the current group
function movePreviousWordInGroup() {
    if (currentWordIndex > 0) {
        currentWordIndex--; // Decrement index for the previous word
        highlightCurrentWord();
    }
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('word-item')) {
        currentWordIndex = parseInt(event.target.dataset.index);
        currentGroupIndex = parseInt(event.target.dataset.group); // Update the current group index
        highlightCurrentWord();
    }
});

// Initial load
displayWords();
highlightCurrentWord();
