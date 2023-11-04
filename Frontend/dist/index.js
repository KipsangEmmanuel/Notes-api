"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const createNoteForm = document.getElementById('create-note-form');
    const titleInput = document.getElementById('title');
    const contentTextarea = document.getElementById('content');
    createNoteForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const title = titleInput.value;
        const content = contentTextarea.value;
        const url = 'http://localhost:7000/notes/register';
        try {
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });
            if (response.ok) {
                const data = yield response.json();
                createNoteCard(data.title, data.content);
                titleInput.value = '';
                contentTextarea.value = '';
            }
            else {
                console.error('Failed to create a note. Please check your server response.');
                // You may display an error message to the user here.
            }
        }
        catch (error) {
            console.error('An error occurred:', error);
            // You may display an error message to the user here.
        }
    }));
    function createNoteCard(title, content) {
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
