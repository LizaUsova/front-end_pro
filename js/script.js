(function () {
    const input = document.querySelector('[data-input]');
    const btn = document.querySelector('[data-btn]');
    const load = document.querySelector('[data-loader]');

    let userInput = null;
    let allPosts = [];



    const getPosts = () => {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    if (!response.ok) {
                        reject(new Error('Network response was not ok'));
                    } else {
                        return response.json();
                    }
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    getPosts()
        .then((data) => {
            if(!Array.isArray(data)) throw new Error('data should be an array');
            allPosts = data;
        })
        .finally(() => {
            load.remove()
        })

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const value = input.value;
            try {
                validationOfNumber(value);
                userInput = Number(value);
            } catch (err) {
                console.error(err.message);
            }

            input.value = ''
        }
    })

    const findPostById = (id) => {
        return allPosts.find(post => post.id === id);
    };
    btn.addEventListener('click', () => {
        const value = input.value.trim();

        try {
            validationOfNumber(value);
            userInput = Number(value);
        } catch (err) {
            alert(err.message);
            return;
        }

        if (!userInput) {
            alert('Enter post ID');
            return;
        }


        const post = findPostById(userInput);

        if (!post) {
            alert(`post ID ${userInput} not found`);
            return;
        }

        renderPost(post);
    })

    const renderPost = (post) => {
        const container = document.createElement('div');
        container.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
        document.body.appendChild(container);
    };

    const validationOfNumber = (num) => {
        const n = Number(num);
        if (!num || isNaN(n) || n < 1 || n > 100) {
            throw new Error('value should be a number or try number from 1 to 100');
        }
    };
})()




