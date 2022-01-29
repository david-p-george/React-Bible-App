/* eslint-disable default-case */
import { useState, useEffect } from "react";
import CustomSelect from "./components/CustomSelect";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [htmlText, setHtmlText] = useState(null);
  const [IsChapterMenuOpen, setIsChapterMenuOpen] = useState(false);

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
      .then(() => document.querySelector('#chapterTitle').textContent = selectedBook + ' ' + selectedChapter)
      .then(() => {document.getElementById('errorText').textContent = ''})
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
    setIsChapterMenuOpen(true);
  }

  let handleOnChangeChapterOptions = (obj) => {
    setSelectedChapter(obj.value);
    setIsChapterMenuOpen(false);
  }

  return (
    <div className="App">
      <p className="text-3xl text-red-600 flex justify-center items-center mt-2 mb-5" id="errorText"></p>

      <div className="flex flex-row justify-center items-center mb-6">
        <CustomSelect options={bookOptions} defaultValue={{ label: 'Select Book', value: 'selectBook' }} styles={{ width: '200px' }} onChangeFunc={handleOnChangeBookOptions}/>
        {selectedBook && <CustomSelect options={returnObjectOptions(chapterOptionsFinder(selectedBook))} defaultValue={{ label: 1, value: 1 }} styles={{ width: '100px', marginLeft: '15px' }} onChangeFunc={handleOnChangeChapterOptions} menuOnOrOff={IsChapterMenuOpen} />}
      </div>

      <p id="chapterTitle" className="flex justify-center items-center text-3xl font-serif mb-3"></p>
      {htmlText && <main dangerouslySetInnerHTML={{ __html: htmlText }} className="flex flex-col items-center text-lg"></main>}
    </div>
  );
}

export default App;
