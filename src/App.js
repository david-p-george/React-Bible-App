/* eslint-disable default-case */
import { useState, useEffect } from "react";
import CustomSelect from "./components/CustomSelect";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [htmlText, setHtmlText] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    let html = '';

    fetch('https://labs.bible.org/api/?passage=john+1&type=json&formatting=para')
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (obj.text.includes('<p') === true ? html += obj.text.slice(0, 20) + `<sup><b>${obj.verse}</b></sup> ` + obj.text.slice(20) : html += `<sup><b>${obj.verse}</b></sup> ${obj.text}`))})
      .then(() => setHtmlText(html))
      .then(() => document.querySelector('#chapterTitle').textContent = 'John 1')
      .catch((error) => {document.getElementById('errorText').textContent = 'Sorry, server is down. Try again after a few minutes.'})
  }, []);
  

  useEffect(() => {
    let html = '';
    setHtmlText('');

    fetch(`https://labs.bible.org/api/?passage=${selectedBook}+${selectedChapter}&type=json&formatting=para`)
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (obj.text.includes('<p') === true ? html += obj.text.slice(0, 20) + `<sup><b>${obj.verse}</b></sup> ` + obj.text.slice(20) : html += `<sup><b>${obj.verse}</b></sup> ${obj.text}`))})
      .then(() => setHtmlText(html))
      .then(() => document.querySelector('#chapterTitle').textContent = firstCharToUpperCase(selectedBook) + ' ' + selectedChapter)
      .then(() => {document.getElementById('errorText').textContent = ''})
  }, [selectedBook, selectedChapter]);
  

  let bookOptions = [
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

  let firstCharToUpperCase = (string) => {
    if (!isNaN(parseInt(string.charAt(0)))) {
      return string[0] + ' ' + string.charAt(1).toUpperCase() + string.slice(2);
    } if (string === 'songofsongs') {
      return 'Song of Solomon';
    } else {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  let chapterOptionsFinder = (bookName) => {
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

  let returnObjectOptions = (num) => {
    let objArray = [];
    
    for (let i = 1; i < num + 1; i++) {
      objArray.push({ label: i, value: i })
    }

    return objArray;
  }

  let handleOnChangeBookOptions = (obj) => {
    setSelectedBook(obj.value);
    setFocus(true);
  }

  let handleOnChangeChapterOptions = (obj) => {
    setSelectedChapter(obj.value);
    setFocus(false);
  }

  let changeMode = () => {
    let html = document.querySelector('html');

    html.style.backgroundColor === 'black' ? html.style.backgroundColor = 'white' : html.style.backgroundColor = 'black';
    html.style.color === 'white' ? html.style.color = 'black' : html.style.color = 'white';

    setIsDark(!isDark);
  }

  return (
    <div>
      <p className="text-3xl text-red-600 flex justify-center items-center mt-2 mb-5" id="errorText"></p>

      <div className="flex flex-row justify-center items-center mb-6">
        <CustomSelect options={bookOptions} defaultValue={{ label: 'Select Book', value: 'selectBook' }} styles={{ width: '200px', color: 'black' }} onChangeFunc={handleOnChangeBookOptions}/>
        {selectedBook && <span onClick={() => setFocus(focus ? false : true)}><CustomSelect options={returnObjectOptions(chapterOptionsFinder(selectedBook))} defaultValue={{ label: 1, value: 1 }} styles={{ width: '100px', marginLeft: '15px', color: 'black' }} onChangeFunc={handleOnChangeChapterOptions} focus={focus} /></span>}
        <span onClick={changeMode} className="bg-blue-300 w-10 h-10 flex items-center justify-center rounded-full ml-5 hover:bg-gray-800 hover:text-white transition duration-300 ease-in">
          {isDark ? 
          (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )
          }
        </span>
      </div>

      <p id="chapterTitle" className="flex justify-center items-center text-3xl font-serif mb-3"></p>
      {htmlText && <main dangerouslySetInnerHTML={{ __html: htmlText }} className="flex flex-col items-center text-xl"></main>}
    </div>
  );
}

export default App;
