/* eslint-disable default-case */
import { useState, useEffect } from "react";
import CustomSelect from "./components/CustomSelect";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [htmlText, setHtmlText] = useState(null);

  useEffect(() => {
    let html = '';

    fetch('https://labs.bible.org/api/?passage=john+1&type=json&formatting=full')
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (html += obj.text))})
      .then(() => setHtmlText(html))
  }, []);
  

  useEffect(() => {
    let html = '';
    // document.querySelector('main').innerHTML = '';
    setHtmlText('');

    fetch(`https://labs.bible.org/api/?passage=${selectedBook}+${selectedChapter}&type=json&formatting=full`)
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (html += obj.text))})
      .then(() => setHtmlText(html))
  }, [selectedBook, selectedChapter]);
  

  let bookOptions = [
      {label: 'Matthew', value: 'matthew'},
      {label: 'Mark', value: 'mark'},
      {label: 'Luke', value: 'luke'},
      {label: 'John', value: 'john'}
  ]

  let chapterOptionsFinder = (bookName) => {
    switch (bookName) {
      case 'Matthew':
        return 28;
        break;

      case 'Mark':
        return 16;
        break;

      case 'Luke':
        return 24;
        break;

      case 'John':
        return 21;
        break;
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
    setSelectedBook(obj.label);
  }

  let handleOnChangeChapterOptions = (obj) => {
    setSelectedChapter(obj.value);
  }

  return (
    <div className="App">
      <h1 className="text-3xl">Hello!</h1>

      <div className="flex flex-row">
        <CustomSelect options={bookOptions} defaultValue={{label: 'Matthew', value: 'matthew'}} styles={{ width: '300px' }} onChangeFunc={handleOnChangeBookOptions}/>
        {selectedBook && <CustomSelect options={returnObjectOptions(chapterOptionsFinder(selectedBook))} defaultValue={{ label: 1, value: 1 }} styles={{ width: '100px', marginLeft: '15px' }} onChangeFunc={handleOnChangeChapterOptions} />}
      </div>

      {htmlText && <main dangerouslySetInnerHTML={{ __html: htmlText }} className="flex flex-col items-center"></main>}
    </div>
  );
}

export default App;
