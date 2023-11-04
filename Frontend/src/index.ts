document.addEventListener('DOMContentLoaded', () => {
    const createNoteForm = document.getElementById('create-note-form') as HTMLFormElement;
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const contentTextarea = document.getElementById('content') as HTMLTextAreaElement;
  
    createNoteForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = titleInput.value;
      const content = contentTextarea.value;
  
      const url = 'http://localhost:7000/notes/register';
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        });
  
        if (response.ok) {
          const data = await response.json();
          createNoteCard(data.title, data.content);
          titleInput.value = '';
          contentTextarea.value = '';
        } else {
          console.error('Failed to create a note.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });
  
    function createNoteCard(title: string, content: string) {
      const noteCardContainer = document.querySelector('.note-card-container');
  
      if (noteCardContainer) {
        const card = document.createElement('div');
        card.classList.add('note-card');
  
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = title;
  
        const cardContent = document.createElement('p');
        cardContent.textContent = content;
  
        card.appendChild(cardTitle);
        card.appendChild(cardContent);
  
        noteCardContainer.appendChild(card);
      }
    }
  });
  