/* eslint-disable default-case */
export let chapterOptionsFinder = (bookName) => {
    switch (bookName) {
      case 'Genesis':
      case 'genesis': 
        return 50;

      case 'Exodus':
      case 'exodus':
        return 40;

      case 'Leviticus':
      case 'leviticus':
        return 27;

      case 'Numbers':
      case 'numbers':
        return 36;

      case 'Deuteronomy':
      case 'deuteronomy':
        return 34;

      case 'Joshua':
      case 'joshua':
        return 24;

      case 'Judges':
      case 'judges':
        return 21;

      case 'Ruth':
      case 'ruth':
        return 4;

      case '1 Samuel':
      case 'I Samuel (Kings I)':
      case '1samuel':
        return 31;

      case '2 Samuel':
      case 'II Samuel (Kings II)':
      case '2samuel':
        return 24;

      case '1 Kings':
      case 'I Kings (Kings III)':
      case '1kings':
        return 22;

      case '2 Kings':
      case 'II Kings (Kings IV)':
      case '2kings':
        return 25;

      case '1 Chronicles':
      case 'I Chronicles':
      case '1chronicles':
        return 29;

      case '2 Chronicles':
      case 'II Chronicles':
      case '2chronicles':
        return 36;

      case 'Ezra':
      case 'ezra':
        return 10;

      case 'Nehemiah':
      case 'nehemiah':
        return 13;

      case 'Esther':
      case 'esther':
        return 10;

      case 'Job':
      case 'job':
        return 42;

      case 'Psalms':
      case 'psalms':
        return 150;

      case 'Proverbs':
      case 'proverbs':
        return 31;

      case 'Ecclesiastes':
      case 'ecclesiastes':
        return 12;

      case 'Song of Solomon (Song of Songs)':
      case 'songofsongs':
        return 8;

      case 'Isaiah':
      case 'isaiah':
        return 66;

      case 'Jeremiah':
      case 'jeremiah':
        return 52;

      case 'Lamentations':
      case 'lamentations':
        return 5;

      case 'Ezekiel':
      case 'ezekiel':
        return 48;

      case 'Daniel':
      case 'daniel':
        return 12;

      case 'Hosea':
      case 'hosea':
        return 14;

      case 'Joel':
      case 'joel':
        return 3;

      case 'Amos':
      case 'amos':
        return 9;

      case 'Obadiah':
      case 'obadiah':
        return 1;

      case 'Jonah':
      case 'jonah':
        return 4;

      case 'Micah':
      case 'micah':
        return 7;

      case 'Nahum':
      case 'nahum':
        return 3;

      case 'Habbakkuk':
      case 'habbakkuk':
        return 3;

      case 'Zephaniah':
      case 'zephaniah':
        return 3;

      case 'Haggai':
      case 'haggai':
        return 2;

      case 'Zechariah':
      case 'zechariah':
        return 14;

      case 'Malachi':
      case 'malachi':
        return 4;

      case 'Matthew':
      case 'matthew':
          return 28;

      case 'Mark':
      case 'mark':
          return 16;

      case 'Luke':
      case 'luke':
          return 24;

      case 'John':
      case 'john':
          return 21;

      case 'Acts (of Apostles)':
      case 'acts':
          return 28;

      case 'Romans':
      case 'romans':
          return 16;

      case '1 Corinthians':
      case 'I Corinthians':
      case '1corinthians':
          return 16;


      case '2 Corinthians':
      case 'II Corinthians':
      case '2corinthians':
          return 13;


      case 'Galatians':
      case 'galatians':
          return 6;


      case 'Ephesians':
      case 'ephesians':
          return 6;


      case 'Philippians':
      case 'philippians':
          return 4;

      case 'Colossians':
      case 'colossians':
          return 4;

      case '1 Thessalonians':
      case 'I Thessalonians':
      case '1thessalonians':
          return 5;

      case '2 Thessalonians':
      case 'II Thessalonians':
      case '2thessalonians':
          return 3;

      case '1 Timothy':
      case 'I Timothy':
      case '1timothy':
          return 6;

      case '2 Timothy':
      case 'II Timothy':
      case '2timothy':
          return 4;

      case 'Titus':
      case 'titus':
          return 3;

      case 'Philemon':
      case 'philemon':
          return 1;

      case 'Hebrews':
      case 'hebrews':
          return 13;

      case 'James':
      case 'james':
          return 5;

      case '1 Peter':
      case 'I Peter':
      case '1peter':
          return 5;

      case '2 Peter':
      case 'II Peter':
      case '2peter':
          return 3;

      case '1 John':
      case 'I John':
      case '1john':
          return 5;

      case '2 John':
      case 'II John':
      case '2john':
          return 1;

      case '3 John':
      case 'III John':
      case '3john':
          return 1;

      case 'Jude':
      case 'jude':
          return 1;

      case 'Revelation':
      case 'revelation':
          return 22;
    }
}

export let bookOptions = [
    {
      label: 'Torah (Pentateuch)',
      options: [
        { label: 'Genesis', value: 'genesis' },
        { label: 'Exodus', value: 'exodus' },
        { label: 'Leviticus', value: 'leviticus' },
        { label: 'Numbers', value: 'numbers' },
        { label: 'Deuteronomy', value: 'deuteronomy' }
      ]
    },

    {
      label: 'Historical Books',
      options: [
        { label: 'Joshua', value: 'joshua' },
        { label: 'Judges', value: 'judges' },
        { label: 'Ruth', value: 'ruth' },
        { label: 'I Samuel (Kings I)', value: '1samuel' },
        { label: 'II Samuel (Kings II)', value: '2samuel' },
        { label: 'I Kings (Kings III)', value: '1kings' },
        { label: 'II Kings (Kings IV)', value: '2kings' },
        { label: 'I Chronicles', value: '1chronicles' },
        { label: 'II Chronicles', value: '2chronicles' },
        { label: 'Ezra', value: 'ezra' },
        { label: 'Nehemiah', value: 'nehemiah' },
        { label: 'Esther', value: 'esther' }
      ]
    },

    {
      label: 'Books of Wisdom (Poetry)',
      options: [
        { label: 'Job', value: 'job' },
        { label: 'Psalms', value: 'psalms' },
        { label: 'Proverbs', value: 'proverbs' },
        { label: 'Ecclesiastes', value: 'ecclesiastes' },
        { label: 'Song of Solomon (Song of Songs)', value: 'songofsongs' }
      ]
    },

    {
      label: 'Major Prophets',
      options: [
        { label: 'Isaiah', value: 'isaiah' },
        { label: 'Jeremiah', value: 'jeremiah' },
        { label: 'Lamentations', value: 'lamentations' },
        { label: 'Ezekiel', value: 'ezekiel' },
        { label: 'Daniel', value: 'daniel' }
      ]
    },

    {
      label: 'Minor Prophets',
      options: [
        { label: 'Hosea', value: 'hosea' },
        { label: 'Joel', value: 'joel' },
        { label: 'Amos', value: 'amos' },
        { label: 'Obadiah', value: 'obadiah' },
        { label: 'Jonah', value: 'jonah' },
        { label: 'Micah', value: 'micah' },
        { label: 'Nahum', value: 'nahum' },
        { label: 'Habbakkuk', value: 'habbakkuk' },
        { label: 'Zephaniah', value: 'zephaniah' },
        { label: 'Haggai', value: 'haggai' },
        { label: 'Zechariah', value: 'zechariah' },
        { label: 'Malachi', value: 'malachi' },
      ]
    },

    {
      label: 'Gospels',
      options: [
        { label: 'Matthew', value: 'matthew' },
        { label: 'Mark', value: 'mark' },
        { label: 'Luke', value: 'luke' },
        { label: 'John', value: 'john' }
      ]
    },

    {
      label: 'History',
      options: [
        { label: 'Acts (of Apostles)', value: 'acts' },
      ]
    },

    {
      label: 'Pauline Epistles',
      options: [
        { label: 'Romans', value: 'romans' },
        { label: 'I Corinthians', value: '1corinthians' },
        { label: 'II Corinthians', value: '2corinthians' },
        { label: 'Galatians', value: 'galatians' },
        { label: 'Ephesians', value: 'ephesians' },
        { label: 'Philippians', value: 'philippians' },
        { label: 'Colossians', value: 'colossians' },
        { label: 'I Thessalonians', value: '1thessalonians' },
        { label: 'II Thessalonians', value: '2thessalonians' },
        { label: 'I Timothy', value: '1timothy' },
        { label: 'II Timothy', value: '2timothy' },
        { label: 'Titus', value: 'titus' },
        { label: 'Philemon', value: 'philemon' },
      ]
    },

    {
      label: 'General Epistles',
      options: [
        { label: 'Hebrews', value: 'hebrews' },
        { label: 'James', value: 'james' },
        { label: 'I Peter', value: '1peter' },
        { label: 'II Peter', value: '2peter' },
        { label: 'I John', value: '1john' },
        { label: 'II John', value: '2john' },
        { label: 'III John', value: '3john' },
        { label: 'Jude', value: 'jude' },
      ]
    },

    {
      label: 'Apocalyptic Writings',
      options: [
        { label: 'Revelation', value: 'revelation' }
      ]
    },
]

export let getBookDetails = (bookName) => {
  switch (bookName) {
    case 'genesis':
    case 'Genesis':
			return { previousChap: '', nextChapter: 'Exodus' };
		
		case 'Exodus':
		case 'exodus':
			return { previousChap: 'genesis', nextChapter: 'leviticus' };

		case 'Leviticus':
    case 'leviticus':
			return { previousChap: 'exodus', nextChapter: 'numbers' };

		case 'Numbers':
		case 'numbers':
			return { previousChap: 'leviticus', nextChapter: 'deuteronomy' };

		case 'Deuteronomy':
		case 'deuteronomy':
				return { previousChap: 'numbers', nextChapter: 'joshua' };

		case 'Joshua':
		case 'joshua':
			return { previousChap: 'deuteronomy', nextChapter: 'judges' };

		case 'Judges':
		case 'judges':
			return { previousChap: 'joshua', nextChapter: 'ruth' };

		case 'Ruth':
		case 'ruth':
			return { previousChap: 'judges', nextChapter: '1samuel' };
	}
}