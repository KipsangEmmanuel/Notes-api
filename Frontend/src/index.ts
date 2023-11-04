let note_title = document.getElementById('title') as HTMLInputElement;
let note_content = document.getElementById('content') as HTMLTextAreaElement;

let create_form = document.getElementById('create-note-form') as HTMLFormElement;

create_form.addEventListener('submit', (event) => {
  event.preventDefault();
  let title = note_title.value;
  let content = note_content.value;

  let newValue = title.trim() !== '' && content.trim() !== '';
  if (newValue) {
    const promise = new Promise<{ error: string, message: string }>((resolve, reject) => {
      fetch('', {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "title": title,
          "content": content
        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          createdNote();
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    function createdNote() {
      location.href = 'index.html';
    }
  }
});
