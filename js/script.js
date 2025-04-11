'use strict';

(function () {
    const btnBooks = document.querySelector('[data-btn-books]');
    const btnMovies = document.querySelector('[data-btn-movies]');
    const btnBooksList = document.querySelector('[data-books-list]');
    const btnMoviesList = document.querySelector('[data-movies-list]');

    const formBooks = document.querySelector('[data-form-books]');
    const formMovies = document.querySelector('[data-form-movies]');

    const btnBooksAdventure = document.querySelector('[data-book-adventure]');
    const btnBooksThriller = document.querySelector('[data-book-thriller]');
    const btnBooksFantasy = document.querySelector('[data-book-fantasy]');

    const btnMoviesComedy = document.querySelector('[data-movie-comedy]');
    const btnMoviesAction = document.querySelector('[data-movie-action]');
    const btnMoviesHorror = document.querySelector('[data-movie-horror]');

    const card = document.querySelector('[data-card]');
    const cardName = document.querySelector('[data-card-name]');
    const cardDescription = document.querySelector('[data-description]');


    const btnBuy = document.querySelector('[data-buy]')


        const books = [
            {
                genre: 'Adventure',
                name: 'The Hobbit',
                description: 'A tale of Bilbo Baggins, a hobbit who embarks on an unexpected journey with a group of dwarves to reclaim a stolen treasure from a dragon. Along the way, he faces challenges that test his courage and resourcefulness.'
            },
            {
                genre: 'Thriller',
                name: 'The Silence of the Lambs',
                description: 'In this psychological thriller, FBI trainee Clarice Starling seeks the help of the imprisoned cannibalistic serial killer Dr. Hannibal Lecter to catch another serial killer on the loose. The story explores the minds of both criminals and investigators.'
            },
            {
                genre: 'Fantasy',
                name: 'The Name of the Wind',
                description: 'The first book in The Kingkiller Chronicle series follows the life of Kvothe, a gifted young man who becomes a legend. The story is filled with magic, music, and the pursuit of knowledge as Kvothe recounts his rise to fame.'
            }
        ];
        const movies = [
            {
                genre: 'Horror',
                name: 'The Conjuring',
                description: 'A chilling tale based on true events, where paranormal investigators Ed and Lorraine Warren try to help a family being terrorized by dark forces in their farmhouse.'
            },
            {
                genre: 'Action',
                name: 'Mad Max: Fury Road',
                description: 'In a post-apocalyptic world, Max teams up with Imperator Furiosa to escape a tyrannical warlord and his army. The action-packed journey involves high-speed chases, explosions, and intense combat.'
            },
            {
                genre: 'Comedy',
                name: 'Superbad',
                description: 'Two high school friends, Seth and Evan, try to enjoy their last days of school by buying alcohol for a party, but their plans spiral into a series of hilarious misadventures.'
            }
        ];

    const formHandlerBooksList = (event) => {
        event.preventDefault();
        event.stopPropagation();

        btnMoviesList.className = 'navbar visually-hidden'
        btnBooksList.className = 'navbar'

        card.className = "card w-100 visually-hidden";
    }

    const formHandlerMoviesList = (event) => {
        event.preventDefault();
        event.stopPropagation();

        btnBooksList.className = 'navbar visually-hidden'
        btnMoviesList.className = 'navbar'

        card.className = "card w-100 visually-hidden";
    }

      btnBooks.addEventListener('click', formHandlerBooksList)
     btnMovies.addEventListener('click', formHandlerMoviesList)

        const handlerAdventure = (event) => {
            event.preventDefault();
            event.stopPropagation();

            card.className = "card w-100";
            cardName.innerHTML = `${books[0].name}`
            cardDescription.innerHTML = `${books[0].description}`
        }
        const handlerThriller = (event) => {
            event.preventDefault();
            event.stopPropagation();

            card.className = "card w-100";
            cardName.innerHTML = `${books[1].name}`
            cardDescription.innerHTML = `${books[1].description}`
        }
        const handlerFantasy = (event) => {
            event.preventDefault();
            event.stopPropagation();

            card.className = "card w-100";
            cardName.innerHTML = `${books[2].name}`
            cardDescription.innerHTML = `${books[2].description}`
        }


        const handlerComedy = (event) => {
            event.preventDefault();
            event.stopPropagation();

            card.className = "card w-100";
            cardName.innerHTML = `${movies[0].name}`
            cardDescription.innerHTML = `${movies[0].description}`
        }
        const handlerAction = (event) => {
            event.preventDefault();
            event.stopPropagation();

            card.className = "card w-100";
            cardName.innerHTML = `${movies[1].name}`
            cardDescription.innerHTML = `${movies[1].description}`
        }
        const handlerHorror = (event) => {
            event.preventDefault();
            event.stopPropagation();

            card.className = "card w-100";
            cardName.innerHTML = `${movies[2].name}`
            cardDescription.innerHTML = `${movies[2].description}`
        }


        btnBooksAdventure.addEventListener('click', handlerAdventure);
        btnBooksThriller.addEventListener('click', handlerThriller);
        btnBooksFantasy.addEventListener('click', handlerFantasy);

        btnMoviesComedy.addEventListener('click', handlerComedy);
        btnMoviesAction.addEventListener('click', handlerAction);
        btnMoviesHorror.addEventListener('click', handlerHorror);

        const handlerOnStart = (event) => {
            location.reload();
        }

        btnBuy.addEventListener('click', handlerOnStart)
    }
)()