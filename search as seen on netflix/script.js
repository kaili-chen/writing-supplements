document.addEventListener("DOMContentLoaded", () => {
    // set the page's base url
    const pageUrl = window.location.href;
    const queryElm = document.getElementById('query');  // query text input element
    const resultsElm = document.getElementById('results');
    const DATA = [
        {
          book: "A Tale of Two Cities",
          authors: "Charles Dickens",
          original_language: "English",
          first_published: 1859,
          approximate_sales_in_millions: 200,
          genres: "Historical fiction"
        },
        {
          book: "The Little Prince (Le Petit Prince)",
          authors: "Antoine de Saint-Exupéry",
          original_language: "French",
          first_published: 1943,
          approximate_sales_in_millions: 200,
          genres: "Novella"
        },
        {
          book: "Harry Potter and the Philosopher's Stone",
          authors: "J. K. Rowling",
          original_language: "English",
          first_published: 1997,
          approximate_sales_in_millions: 120,
          genres: "Fantasy"
        },
        {
          book: "And Then There Were None",
          authors: "Agatha Christie",
          original_language: "English",
          first_published: 1939,
          approximate_sales_in_millions: 100,
          genres: "Mystery"
        },
        {
          book: "Dream of the Red Chamber (紅樓夢)",
          authors: "Cao Xueqin",
          original_language: "Chinese",
          first_published: 1791,
          approximate_sales_in_millions: 100,
          genres: "Family saga"
        },
        {
          book: "The Hobbit",
          authors: "J. R. R. Tolkien",
          original_language: "English",
          first_published: 1937,
          approximate_sales_in_millions: 100,
          genres: "Fantasy"
        },
        {
          book: "The Lion, the Witch and the Wardrobe",
          authors: "C. S. Lewis",
          original_language: "English",
          first_published: 1950,
          approximate_sales_in_millions: 85,
          genres: "Fantasy, Children's fiction"
        },
        {
          book: "She: A History of Adventure",
          authors: "H. Rider Haggard",
          original_language: "English",
          first_published: 1887,
          approximate_sales_in_millions: 83,
          genres: "Adventure"
        },
        {
          book: "Vardi Wala Gunda (वर्दी वाला गुंडा)",
          authors: "Ved Prakash Sharma",
          original_language: "Hindi",
          first_published: 1992,
          approximate_sales_in_millions: 80,
          genres: "Detective"
        },
        {
          book: "The Da Vinci Code",
          authors: "Dan Brown",
          original_language: "English",
          first_published: 2003,
          approximate_sales_in_millions: 80,
          genres: "Mystery thriller"
        },
        {
          book: "Harry Potter and the Chamber of Secrets",
          authors: "J. K. Rowling",
          original_language: "English",
          first_published: 1998,
          approximate_sales_in_millions: 77,
          genres: "Fantasy"
        },
        {
          book: "Harry Potter and the Prisoner of Azkaban",
          authors: "J. K. Rowling",
          original_language: "English",
          first_published: 1999,
          approximate_sales_in_millions: 65,
          genres: "Fantasy"
        },
        {
          book: "Harry Potter and the Goblet of Fire",
          authors: "J. K. Rowling",
          original_language: "English",
          first_published: 2000,
          approximate_sales_in_millions: 65,
          genres: "Fantasy"
        },
        {
          book: "Harry Potter and the Order of the Phoenix",
          authors: "J. K. Rowling",
          original_language: "English",
          first_published: 2003,
          approximate_sales_in_millions: 65,
          genres: "Fantasy"
        },
        {
          book: "Harry Potter and the Half-Blood Prince",
          authors: "J. K. Rowling",
          original_language: "English",
          first_published: 2005,
          approximate_sales_in_millions: 65,
          genres: "Fantasy"
        },
        {
          book: "Harry Potter and the Deathly Hallows",
          authors: "J. K. Rowling",
          original_language: "English",
          first_published: 2007,
          approximate_sales_in_millions: 65,
          genres: "Fantasy"
        },
        {
          book: "The Alchemist (O Alquimista)",
          authors: "Paulo Coelho",
          original_language: "Portuguese",
          first_published: 1988,
          approximate_sales_in_millions: 65,
          genres: "Fantasy"
        },
        {
          book: "The Catcher in the Rye",
          authors: "J. D. Salinger",
          original_language: "English",
          first_published: 1951,
          approximate_sales_in_millions: 65,
          genres: "Coming-of-age"
        },
        {
          book: "The Bridges of Madison County",
          authors: "Robert James Waller",
          original_language: "English",
          first_published: 1992,
          approximate_sales_in_millions: 60,
          genres: "Romance"
        },
        {
          book: "Ben-Hur: A Tale of the Christ",
          authors: "Lew Wallace",
          original_language: "English",
          first_published: 1880,
          approximate_sales_in_millions: 50,
          genres: "Historical fiction"
        },
        {
          book: "You Can Heal Your Life",
          authors: "Louise Hay",
          original_language: "English",
          first_published: 1984,
          approximate_sales_in_millions: 50,
          genres: "Self-help"
        },
        {
          book: "One Hundred Years of Solitude (Cien años de soledad)",
          authors: "Gabriel García Márquez",
          original_language: "Spanish",
          first_published: 1967,
          approximate_sales_in_millions: 50,
          genres: "Magic realism"
        },
        {
          book: "Lolita",
          authors: "Vladimir Nabokov",
          original_language: "English",
          first_published: 1955,
          approximate_sales_in_millions: 50,
          genres: "Novel"
        },
        {
          book: "Heidi",
          authors: "Johanna Spyri",
          original_language: "German",
          first_published: 1880,
          approximate_sales_in_millions: 50,
          genres: "Children's fiction"
        },
        {
          book: "The Common Sense Book of Baby and Child Care",
          authors: "Benjamin Spock",
          original_language: "English",
          first_published: 1946,
          approximate_sales_in_millions: 50,
          genres: "Manual"
        },
        {
          book: "Anne of Green Gables",
          authors: "Lucy Maud Montgomery",
          original_language: "English",
          first_published: 1908,
          approximate_sales_in_millions: 50,
          genres: "Children's novel"
        },
        {
          book: "Black Beauty",
          authors: "Anna Sewell",
          original_language: "English",
          first_published: 1877,
          approximate_sales_in_millions: 50,
          genres: "Children's literature"
        },
        {
          book: "The Name of the Rose (Il Nome della Rosa)",
          authors: "Umberto Eco",
          original_language: "Italian",
          first_published: 1980,
          approximate_sales_in_millions: 50,
          genres: "Historical novel, mystery"
        },
        {
          book: "The Eagle Has Landed",
          authors: "Jack Higgins",
          original_language: "English",
          first_published: 1975,
          approximate_sales_in_millions: 50,
          genres: "War, thriller"
        },
        {
          book: "Watership Down",
          authors: "Richard Adams",
          original_language: "English",
          first_published: 1972,
          approximate_sales_in_millions: 50,
          genres: "Fantasy"
        },
        {
          book: "The Hite Report",
          authors: "Shere Hite",
          original_language: "English",
          first_published: 1976,
          approximate_sales_in_millions: 50,
          genres: "Sexology"
        },
        {
          book: "Charlotte's Web",
          authors: "E. B. White; illustrated by Garth Williams",
          original_language: "English",
          first_published: 1952,
          approximate_sales_in_millions: 50,
          genres: "Children's fiction"
        },
        {
          book: "The Ginger Man",
          authors: "J. P. Donleavy",
          original_language: "English",
          first_published: 1955,
          approximate_sales_in_millions: 50,
          genres: "Novel"
        },
        {
          book: "The Tale of Peter Rabbit",
          authors: "Beatrix Potter",
          original_language: "English",
          first_published: 1902,
          approximate_sales_in_millions: 45,
          genres: "Children's Literature"
        },
        {
          book: "Jonathan Livingston Seagull",
          authors: "Richard Bach",
          original_language: "English",
          first_published: 1970,
          approximate_sales_in_millions: 44,
          genres: "Novella, Self-help"
        },
        {
          book: "The Very Hungry Caterpillar",
          authors: "Eric Carle",
          original_language: "English",
          first_published: 1969,
          approximate_sales_in_millions: 43,
          genres: "Children's Literature, picture book"
        },
        {
          book: "A Message to Garcia",
          authors: "Elbert Hubbard",
          original_language: "English",
          first_published: 1899,
          approximate_sales_in_millions: 40,
          genres: "Essay/Literature"
        },
        {
          book: "To Kill a Mockingbird",
          authors: "Harper Lee",
          original_language: "English",
          first_published: 1960,
          approximate_sales_in_millions: 40,
          genres: "Southern Gothic, Bildungsroman"
        },
        {
          book: "Flowers in the Attic",
          authors: "V. C. Andrews",
          original_language: "English",
          first_published: 1979,
          approximate_sales_in_millions: 40,
          genres: "Gothic horror, Family saga"
        },
        {
          book: "Cosmos",
          authors: "Carl Sagan",
          original_language: "English",
          first_published: 1980,
          approximate_sales_in_millions: 40,
          genres: "Popular science, Anthropology, Astrophysics, Cosmology, Philosophy, History"
        },
        {
          book: "Sophie's World (Sofies verden)",
          authors: "Jostein Gaarder",
          original_language: "Norwegian",
          first_published: 1991,
          approximate_sales_in_millions: 40,
          genres: "Philosophical novel, Young adult"
        },
        {
          book: "Angels & Demons",
          authors: "Dan Brown",
          original_language: "English",
          first_published: 2000,
          approximate_sales_in_millions: 39,
          genres: "Mystery-thriller"
        },
        {
          book: "Kane and Abel",
          authors: "Jeffrey Archer",
          original_language: "English",
          first_published: 1979,
          approximate_sales_in_millions: 37,
          genres: "Novel"
        },
        {
          book: "How the Steel Was Tempered (Как закалялась сталь)",
          authors: "Nikolai Ostrovsky",
          original_language: "Russian",
          first_published: 1932,
          approximate_sales_in_millions: 36.4,
          genres: "Socialist realist novel"
        },
        {
          book: "War and Peace (Война и мир)",
          authors: "Leo Tolstoy",
          original_language: "Russian",
          first_published: 1869,
          approximate_sales_in_millions: 36,
          genres: "Historical novel"
        },
        {
          book: "The Adventures of Pinocchio (Le avventure di Pinocchio)",
          authors: "Carlo Collodi",
          original_language: "Italian",
          first_published: 1881,
          approximate_sales_in_millions: 35,
          genres: "Fantasy, Children's fiction"
        },
        {
          book: "The Diary of Anne Frank (Het Achterhuis)",
          authors: "Anne Frank",
          original_language: "Dutch",
          first_published: 1947,
          approximate_sales_in_millions: 35,
          genres: "Historical non-fiction, Autobiography, Memoir, Bildungsroman / Coming of Age, Jewish literature"
        },
        {
          book: "Your Erroneous Zones",
          authors: "Wayne Dyer",
          original_language: "English",
          first_published: 1976,
          approximate_sales_in_millions: 35,
          genres: "Self-help"
        },
        {
          book: "The Thorn Birds",
          authors: "Colleen McCullough",
          original_language: "English",
          first_published: 1977,
          approximate_sales_in_millions: 33,
          genres: "Romantic family saga"
        },
        {
          book: "The Purpose Driven Life",
          authors: "Rick Warren",
          original_language: "English",
          first_published: 2002,
          approximate_sales_in_millions: 33,
          genres: "Christian literature"
        },
        {
          book: "The Kite Runner",
          authors: "Khaled Hosseini",
          original_language: "English",
          first_published: 2003,
          approximate_sales_in_millions: 31.5,
          genres: "Bildungsroman, Historical fiction"
        },
        {
          book: "Valley of the Dolls",
          authors: "Jacqueline Susann",
          original_language: "English",
          first_published: 1966,
          approximate_sales_in_millions: 31,
          genres: "Novel"
        },
        {
          book: "Alcoholics Anonymous Big Book",
          authors: "Bill Wilson",
          original_language: "English",
          first_published: 1939,
          approximate_sales_in_millions: 30,
          genres: "Self-help"
        },
        {
          book: "How to Win Friends and Influence People",
          authors: "Dale Carnegie",
          original_language: "English",
          first_published: 1936,
          approximate_sales_in_millions: 30,
          genres: "Self-help"
        },
        {
          book: "The Great Gatsby",
          authors: "F. Scott Fitzgerald",
          original_language: "English",
          first_published: 1925,
          approximate_sales_in_millions: 30,
          genres: "Novel, tragedy"
        },
        {
          book: "Gone with the Wind",
          authors: "Margaret Mitchell",
          original_language: "English",
          first_published: 1936,
          approximate_sales_in_millions: 30,
          genres: "Historical fiction"
        },
        {
          book: "Rebecca",
          authors: "Daphne du Maurier",
          original_language: "English",
          first_published: 1938,
          approximate_sales_in_millions: 30,
          genres: "Gothic novel"
        },
        {
          book: "Nineteen Eighty-Four",
          authors: "George Orwell",
          original_language: "English",
          first_published: 1949,
          approximate_sales_in_millions: 30,
          genres: "Dystopian, political fiction, social science fiction"
        },
        {
          book: "The Revolt of Mamie Stover",
          authors: "William Bradford Huie",
          original_language: "English",
          first_published: 1951,
          approximate_sales_in_millions: 30,
          genres: "Fiction"
        },
        {
          book: "The Girl with the Dragon Tattoo (Män som hatar kvinnor)",
          authors: "Stieg Larsson",
          original_language: "Swedish",
          first_published: 2005,
          approximate_sales_in_millions: 30,
          genres: "Fiction"
        },
        {
          book: "The Lost Symbol",
          authors: "Dan Brown",
          original_language: "English",
          first_published: 2009,
          approximate_sales_in_millions: 30,
          genres: "Fiction"
        },
        {
          book: "The Hunger Games",
          authors: "Suzanne Collins",
          original_language: "English",
          first_published: 2008,
          approximate_sales_in_millions: 29,
          genres: "Young adult fiction"
        },
        {
          book: "James and the Giant Peach",
          authors: "Roald Dahl",
          original_language: "English",
          first_published: 1961,
          approximate_sales_in_millions: 28,
          genres: "Children's novel"
        },
        {
          book: "The Young Guard (Молодая гвардия)",
          authors: "Alexander Alexandrovich Fadeyev",
          original_language: "Russian",
          first_published: 1945,
          approximate_sales_in_millions: 26,
          genres: "Young adult historical novel"
        },
        {
          book: "Who Moved My Cheese?",
          authors: "Spencer Johnson",
          original_language: "English",
          first_published: 1998,
          approximate_sales_in_millions: 29,
          genres: "Self-help, motivational, business fable, psychology, leadership, parable"
        },
        {
          book: "A Brief History of Time",
          authors: "Stephen Hawking",
          original_language: "English",
          first_published: 1988,
          approximate_sales_in_millions: 25,
          genres: "Popular science"
        },
        {
          book: "Paul et Virginie",
          authors: "Jacques-Henri Bernardin de Saint-Pierre",
          original_language: "French",
          first_published: 1788,
          approximate_sales_in_millions: 25,
          genres: "Novel"
        },
        {
          book: "Lust for Life",
          authors: "Irving Stone",
          original_language: "English",
          first_published: 1934,
          approximate_sales_in_millions: 25,
          genres: "Biographical novel"
        },
        {
          book: "The Wind in the Willows",
          authors: "Kenneth Grahame",
          original_language: "English",
          first_published: 1908,
          approximate_sales_in_millions: 25,
          genres: "Children's literature"
        },
        {
          book: "The 7 Habits of Highly Effective People",
          authors: "Stephen R. Covey",
          original_language: "English",
          first_published: 1989,
          approximate_sales_in_millions: 25,
          genres: "Self-help"
        },
        {
          book: "Virgin Soil Upturned (Поднятая целина)",
          authors: "Mikhail Sholokhov",
          original_language: "Russian",
          first_published: 1935,
          approximate_sales_in_millions: 24,
          genres: "Novel"
        },
        {
          book: "The Celestine Prophecy",
          authors: "James Redfield",
          original_language: "English",
          first_published: 1993,
          approximate_sales_in_millions: 23,
          genres: "New-age spiritual novel"
        },
        {
          book: "The Fault in Our Stars",
          authors: "John Green",
          original_language: "English",
          first_published: 2012,
          approximate_sales_in_millions: 23,
          genres: "Young adult romantic novel"
        },
        {
          book: "The Girl on the Train",
          authors: "Paula Hawkins",
          original_language: "English",
          first_published: 2015,
          approximate_sales_in_millions: 23,
          genres: "Thriller"
        },
        {
          book: "The Shack",
          authors: "William P. Young",
          original_language: "English",
          first_published: 2007,
          approximate_sales_in_millions: 22.5,
          genres: "Novel"
        },
        {
          book: "Uncle Styopa (Дядя Стёпа)",
          authors: "Sergey Mikhalkov",
          original_language: "Russian",
          first_published: 1936,
          approximate_sales_in_millions: 21,
          genres: "Children's Literature, picture book"
        },
        {
          book: "The Godfather",
          authors: "Mario Puzo",
          original_language: "English",
          first_published: 1969,
          approximate_sales_in_millions: 21,
          genres: "Crime novel"
        },
        {
          book: "Love Story",
          authors: "Erich Segal",
          original_language: "English",
          first_published: 1970,
          approximate_sales_in_millions: 21,
          genres: "Romance novel"
        },
        {
          book: "Catching Fire",
          authors: "Suzanne Collins",
          original_language: "English",
          first_published: 2009,
          approximate_sales_in_millions: 21,
          genres: "Young Adult novel, adventure, dystopian, science fiction"
        },
        {
          book: "Mockingjay",
          authors: "Suzanne Collins",
          original_language: "English",
          first_published: 2010,
          approximate_sales_in_millions: 20,
          genres: "Young Adult novel, adventure, war, science fiction, action thriller"
        },
        {
          book: "Kitchen (キッチン)",
          authors: "Banana Yoshimoto",
          original_language: "Japanese",
          first_published: 1988,
          approximate_sales_in_millions: 20,
          genres: "Japanese novel"
        },
        {
          book: "Andromeda Nebula (Туманность Андромеды)",
          authors: "Ivan Yefremov",
          original_language: "Russian",
          first_published: 1957,
          approximate_sales_in_millions: 20,
          genres: "Science fiction novel"
        },
        {
          book: "Autobiography of a Yogi (योगी कथामृत)",
          authors: "Paramahansa Yogananda",
          original_language: "Hindi",
          first_published: 1946,
          approximate_sales_in_millions: 20,
          genres: "Autobiography"
        },
        {
          book: "Gone Girl",
          authors: "Gillian Flynn",
          original_language: "English",
          first_published: 2012,
          approximate_sales_in_millions: 20,
          genres: "Crime thriller novel"
        },
        {
          book: "All Quiet on the Western Front (Im Westen nichts Neues)",
          authors: "Erich Maria Remarque",
          original_language: "German",
          first_published: 1929,
          approximate_sales_in_millions: 20,
          genres: "War novel"
        },
        {
          book: "The Bermuda Triangle",
          authors: "Charles Berlitz",
          original_language: "English",
          first_published: 1974,
          approximate_sales_in_millions: 20,
          genres: ""
        },
        {
          book: "Things Fall Apart",
          authors: "Chinua Achebe",
          original_language: "English",
          first_published: 1958,
          approximate_sales_in_millions: 20,
          genres: "Novel"
        },
        {
          book: "Animal Farm",
          authors: "George Orwell",
          original_language: "English",
          first_published: 1945,
          approximate_sales_in_millions: 20,
          genres: "Satirical allegorical novella, Political satire, Dystopian Fiction, Roman à clef"
        },
        {
          book: "Wolf Totem (狼图腾)",
          authors: "Jiang Rong",
          original_language: "Chinese",
          first_published: 2004,
          approximate_sales_in_millions: 20,
          genres: "Semi-autobiographical novel"
        },
        {
          book: "The Happy Hooker: My Own Story",
          authors: "Xaviera Hollander",
          original_language: "English",
          first_published: 1971,
          approximate_sales_in_millions: 20,
          genres: "Memoir"
        },
        {
          book: "Jaws",
          authors: "Peter Benchley",
          original_language: "English",
          first_published: 1974,
          approximate_sales_in_millions: 20,
          genres: "Thriller"
        },
        {
          book: "Love You Forever",
          authors: "Robert Munsch",
          original_language: "English",
          first_published: 1986,
          approximate_sales_in_millions: 20,
          genres: "Children's literature, picture book, fiction"
        },
        {
          book: "The Women's Room",
          authors: "Marilyn French",
          original_language: "English",
          first_published: 1977,
          approximate_sales_in_millions: 20,
          genres: "Feminist novel"
        },
        {
          book: "What to Expect When You're Expecting",
          authors: "Arlene Eisenberg and Heidi Murkoff",
          original_language: "English",
          first_published: 1984,
          approximate_sales_in_millions: 20,
          genres: "Pregnancy guide"
        },
        {
          book: "Adventures of Huckleberry Finn",
          authors: "Mark Twain",
          original_language: "English",
          first_published: 1885,
          approximate_sales_in_millions: 20,
          genres: "Picaresque novel, Bildungsroman, satire, Robinsonade"
        },
        {
          book: "The Secret Diary of Adrian Mole, Aged 13¾",
          authors: "Sue Townsend",
          original_language: "English",
          first_published: 1982,
          approximate_sales_in_millions: 20,
          genres: "Young adult novel"
        },
        {
          book: "Pride and Prejudice",
          authors: "Jane Austen",
          original_language: "English",
          first_published: 1813,
          approximate_sales_in_millions: 20,
          genres: "Classic regency novel, romance"
        },
        {
          book: "Kon-Tiki: Across the Pacific in a Raft (Kon-Tiki ekspedisjonen)",
          authors: "Thor Heyerdahl",
          original_language: "Norwegian",
          first_published: 1950,
          approximate_sales_in_millions: 20,
          genres: "Travel literature"
        },
        {
          book: "The Good Soldier Švejk (Osudy dobrého vojáka Švejka za světové války)",
          authors: "Jaroslav Hašek",
          original_language: "Czech",
          first_published: 1923,
          approximate_sales_in_millions: 20,
          genres: "Unfinished satirical dark comedy novel"
        },
        {
          book: "Where the Wild Things Are",
          authors: "Maurice Sendak",
          original_language: "English",
          first_published: 1963,
          approximate_sales_in_millions: 20,
          genres: "Children's picture book"
        },
        {
          book: "The Power of Positive Thinking",
          authors: "Norman Vincent Peale",
          original_language: "English",
          first_published: 1952,
          approximate_sales_in_millions: 20,
          genres: "Self-help"
        },
        {
          book: "The Secret",
          authors: "Rhonda Byrne",
          original_language: "English",
          first_published: 2006,
          approximate_sales_in_millions: 20,
          genres: "Self-help"
        },
        {
          book: "Fear of Flying",
          authors: "Erica Jong",
          original_language: "English",
          first_published: 1973,
          approximate_sales_in_millions: 20,
          genres: "Romantic novel"
        },
        {
          book: "Dune",
          authors: "Frank Herbert",
          original_language: "English",
          first_published: 1965,
          approximate_sales_in_millions: 20,
          genres: "Science fiction novel"
        },
        {
          book: "Charlie and the Chocolate Factory",
          authors: "Roald Dahl",
          original_language: "English",
          first_published: 1964,
          approximate_sales_in_millions: 20,
          genres: "Children's fantasy novel"
        },
        {
          book: "The Naked Ape",
          authors: "Desmond Morris",
          original_language: "English",
          first_published: 1968,
          approximate_sales_in_millions: 20,
          genres: "Social Science, Anthropology, Psychology"
        },
        {
          book: "Where the Crawdads Sing",
          authors: "Delia Owens",
          original_language: "English",
          first_published: 2018,
          approximate_sales_in_millions: 18,
          genres: "Coming-of-age Murder mystery"
        },
        {
          book: "Totto-chan, the Little Girl at the Window (窓ぎわのトットちゃん)",
          authors: "Tetsuko Kuroyanagi",
          original_language: "Japanese",
          first_published: 1981,
          approximate_sales_in_millions: 18,
          genres: "Autobiographical novel"
        },
        {
          book: "Matilda",
          authors: "Roald Dahl",
          original_language: "English",
          first_published: 1988,
          approximate_sales_in_millions: 17,
          genres: "Children's Literature"
        },
        {
          book: "The Book Thief",
          authors: "Markus Zusak",
          original_language: "English",
          first_published: 2005,
          approximate_sales_in_millions: 16,
          genres: "Young Adult Fiction"
        },
        {
          book: "The Horse Whisperer",
          authors: "Nicholas Evans",
          original_language: "English",
          first_published: 1995,
          approximate_sales_in_millions: 16,
          genres: ""
        },
        {
          book: "Goodnight Moon",
          authors: "Margaret Wise Brown",
          original_language: "English",
          first_published: 1947,
          approximate_sales_in_millions: 16,
          genres: "Children's Literature"
        },
        {
          book: "The Neverending Story (Die unendliche Geschichte)",
          authors: "Michael Ende",
          original_language: "German",
          first_published: 1979,
          approximate_sales_in_millions: 16,
          genres: "Children's Literature"
        },
        {
          book: "All the Light We Cannot See",
          authors: "Anthony Doerr",
          original_language: "English",
          first_published: 2014,
          approximate_sales_in_millions: 15.3,
          genres: "Historical fiction, war novel"
        },
        {
          book: "Fifty Shades of Grey",
          authors: "E. L. James",
          original_language: "English",
          first_published: 2011,
          approximate_sales_in_millions: 15.2,
          genres: "Erotica"
        },
        {
          book: "The Outsiders",
          authors: "S. E. Hinton",
          original_language: "English",
          first_published: 1967,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "Guess How Much I Love You",
          authors: "Sam McBratney",
          original_language: "English",
          first_published: 1994,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "Shōgun",
          authors: "James Clavell",
          original_language: "English",
          first_published: 1975,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "The Poky Little Puppy",
          authors: "Janette Sebring Lowrey",
          original_language: "English",
          first_published: 1942,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "The Pillars of the Earth",
          authors: "Ken Follett",
          original_language: "English",
          first_published: 1989,
          approximate_sales_in_millions: 15,
          genres: "Historical fiction"
        },
        {
          book: "Perfume (Das Parfum)",
          authors: "Patrick Süskind",
          original_language: "German",
          first_published: 1985,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "The Grapes of Wrath",
          authors: "John Steinbeck",
          original_language: "English",
          first_published: 1939,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "The Shadow of the Wind (La sombra del viento)",
          authors: "Carlos Ruiz Zafón",
          original_language: "Spanish",
          first_published: 2001,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "Interpreter of Maladies",
          authors: "Jhumpa Lahiri",
          original_language: "English",
          first_published: 2000,
          approximate_sales_in_millions: 15,
          genres: ""
        },
        {
          book: "Becoming",
          authors: "Michelle Obama",
          original_language: "English",
          first_published: 2018,
          approximate_sales_in_millions: 14,
          genres: ""
        },
        {
          book: "The Hitchhiker's Guide to the Galaxy",
          authors: "Douglas Adams",
          original_language: "English",
          first_published: 1979,
          approximate_sales_in_millions: 14,
          genres: "Science fiction"
        },
        {
          book: "Tuesdays with Morrie",
          authors: "Mitch Albom",
          original_language: "English",
          first_published: 1997,
          approximate_sales_in_millions: 14,
          genres: ""
        },
        {
          book: "God's Little Acre",
          authors: "Erskine Caldwell",
          original_language: "English",
          first_published: 1933,
          approximate_sales_in_millions: 14,
          genres: ""
        },
        {
          book: "Follow Your Heart (Va' dove ti porta il cuore)",
          authors: "Susanna Tamaro",
          original_language: "Italian",
          first_published: 1994,
          approximate_sales_in_millions: 14,
          genres: ""
        },
        {
          book: "A Wrinkle in Time",
          authors: "Madeleine L'Engle",
          original_language: "English",
          first_published: 1962,
          approximate_sales_in_millions: 14,
          genres: ""
        },
        {
          book: "Long Walk to Freedom",
          authors: "Nelson Mandela",
          original_language: "English",
          first_published: 1994,
          approximate_sales_in_millions: 14,
          genres: ""
        },
        {
          book: "The Old Man and the Sea",
          authors: "Ernest Hemingway",
          original_language: "English",
          first_published: 1952,
          approximate_sales_in_millions: 13,
          genres: ""
        },
        {
          book: "Life After Life",
          authors: "Raymond Moody",
          original_language: "English",
          first_published: 1975,
          approximate_sales_in_millions: 13,
          genres: ""
        },
        {
          book: "Peyton Place",
          authors: "Grace Metalious",
          original_language: "English",
          first_published: 1956,
          approximate_sales_in_millions: 12.1,
          genres: ""
        },
        {
          book: "The Giver",
          authors: "Lois Lowry",
          original_language: "English",
          first_published: 1993,
          approximate_sales_in_millions: 12,
          genres: "Dystopian fiction"
        },
        {
          book: "Me Before You",
          authors: "Jojo Moyes",
          original_language: "English",
          first_published: 2012,
          approximate_sales_in_millions: 12,
          genres: ""
        },
        {
          book: "Norwegian Wood (ノルウェイの森)",
          authors: "Haruki Murakami",
          original_language: "Japanese",
          first_published: 1987,
          approximate_sales_in_millions: 12,
          genres: ""
        },
        {
          book: "The Plague (La Peste)",
          authors: "Albert Camus",
          original_language: "French",
          first_published: 1947,
          approximate_sales_in_millions: 12,
          genres: ""
        },
        {
          book: "No Longer Human (人間失格)",
          authors: "Osamu Dazai",
          original_language: "Japanese",
          first_published: 1948,
          approximate_sales_in_millions: 12,
          genres: ""
        },
        {
          book: "Man's Search for Meaning (Ein Psychologe erlebt das Konzentrationslager)",
          authors: "Viktor Frankl",
          original_language: "German",
          first_published: 1946,
          approximate_sales_in_millions: 12,
          genres: ""
        },
        {
          book: "The Divine Comedy (La Divina Commedia)",
          authors: "Dante Alighieri",
          original_language: "Italian",
          first_published: 1304,
          approximate_sales_in_millions: 11.5,
          genres: ""
        },
        {
          book: "The Prophet",
          authors: "Kahlil Gibran",
          original_language: "English",
          first_published: 1923,
          approximate_sales_in_millions: 11,
          genres: ""
        },
        {
          book: "The Boy in the Striped Pyjamas",
          authors: "John Boyne",
          original_language: "English",
          first_published: 2006,
          approximate_sales_in_millions: 11,
          genres: ""
        },
        {
          book: "The Exorcist",
          authors: "William Peter Blatty",
          original_language: "English",
          first_published: 1971,
          approximate_sales_in_millions: 11,
          genres: "Horror"
        },
        {
          book: "The Gruffalo",
          authors: "Julia Donaldson",
          original_language: "English",
          first_published: 1999,
          approximate_sales_in_millions: 10.5,
          genres: ""
        },
        {
          book: "Fifty Shades Darker",
          authors: "E. L. James",
          original_language: "English",
          first_published: 2012,
          approximate_sales_in_millions: 10.4,
          genres: "Erotica"
        },
        {
          book: "Tobacco Road",
          authors: "Erskine Caldwell",
          original_language: "English",
          first_published: 1932,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Ronia, the Robber's Daughter",
          authors: "Astrid Lindgren",
          original_language: "Swedish",
          first_published: 1981,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Cat in the Hat",
          authors: "Dr. Seuss",
          original_language: "English",
          first_published: 1957,
          approximate_sales_in_millions: 10.5,
          genres: ""
        },
        {
          book: "Diana: Her True Story",
          authors: "Andrew Morton",
          original_language: "English",
          first_published: 1992,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Help",
          authors: "Kathryn Stockett",
          original_language: "English",
          first_published: 2009,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Catch-22",
          authors: "Joseph Heller",
          original_language: "English",
          first_published: 1961,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Stranger (L'Étranger)",
          authors: "Albert Camus",
          original_language: "French",
          first_published: 1942,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Eye of the Needle",
          authors: "Ken Follett",
          original_language: "English",
          first_published: 1978,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Lovely Bones",
          authors: "Alice Sebold",
          original_language: "English",
          first_published: 2002,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Wild Swans",
          authors: "Jung Chang",
          original_language: "English",
          first_published: 1992,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Santa Evita",
          authors: "Tomás Eloy Martínez",
          original_language: "Spanish",
          first_published: 1995,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Night (Un di Velt Hot Geshvign)",
          authors: "Elie Wiesel",
          original_language: "Yiddish",
          first_published: 1958,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Confucius from the Heart (于丹《论语》心得)",
          authors: "Yu Dan",
          original_language: "Chinese",
          first_published: 2006,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Total Woman",
          authors: "Marabel Morgan",
          original_language: "English",
          first_published: 1974,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Knowledge-value Revolution (知価革命)",
          authors: "Taichi Sakaiya",
          original_language: "Japanese",
          first_published: 1985,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Problems in China's Socialist Economy (中国社会主义经济问题研究)",
          authors: "Xue Muqiao",
          original_language: "Chinese",
          first_published: 1979,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "What Color Is Your Parachute?",
          authors: "Richard Nelson Bolles",
          original_language: "English",
          first_published: 1970,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Dukan Diet",
          authors: "Pierre Dukan",
          original_language: "French",
          first_published: 2000,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Joy of Sex",
          authors: "Alex Comfort",
          original_language: "English",
          first_published: 1972,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Gospel According to Peanuts",
          authors: "Robert L. Short",
          original_language: "English",
          first_published: 1965,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Subtle Art of Not Giving a Fuck",
          authors: "Mark Manson",
          original_language: "English",
          first_published: 2016,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Life of Pi",
          authors: "Yann Martel",
          original_language: "English",
          first_published: 2001,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Front Runner",
          authors: "Patricia Nell Warren",
          original_language: "English",
          first_published: 1974,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Goal",
          authors: "Eliyahu M. Goldratt",
          original_language: "English",
          first_published: 1984,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Fahrenheit 451",
          authors: "Ray Bradbury",
          original_language: "English",
          first_published: 1953,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Angela's Ashes",
          authors: "Frank McCourt",
          original_language: "English",
          first_published: 1996,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "The Story of My Experiments with Truth (સત્યના પ્રયોગો અથવા આત્મકથા)",
          authors: "Mohandas Karamchand Gandhi",
          original_language: "Gujarati",
          first_published: 1929,
          approximate_sales_in_millions: 10,
          genres: ""
        },
        {
          book: "Bridget Jones's Diary",
          authors: "Helen Fielding",
          original_language: "English",
          first_published: 1996,
          approximate_sales_in_millions: 10,
          genres: ""
        }
      ]

      function find_books(query) {
        // search for the book's title and author
          var results = []
          DATA.forEach(function (bk) {
              if ((bk.book.toUpperCase().includes(query.toUpperCase())) || (bk.authors.toUpperCase().includes(query.toUpperCase()))) {
                  results.push(bk)
              }
          });
          return results;
      }

    function add_to_results_display(book) {
        // adds a book to the result
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-start");
        var div1 = document.createElement("div");
        div1.setAttribute("class", "ms-2 me-auto");
        li.appendChild(div1);
        var div2 = document.createElement("div");
        div2.setAttribute("class", "fw-bold")
        div2.appendChild(document.createTextNode(book.book))
        div1.appendChild(div2)
        var small = document.createElement("small")
        small.appendChild(document.createTextNode(book.authors));
        div1.appendChild(small)
        resultsElm.appendChild(li);
    }

    function add_results_count(len) {
      // sets the result count on the webpage
        document.getElementById("results-count").innerHTML = "" + len + " results";
    }

    function change_url(query) {
        var nextURL = pageUrl + "?q="+ query
        // if the query is empty, remove the query extension
        if (query.length == 0) {
            nextURL = pageUrl
        }
        // of the 2 methods, comment out whichever is not used
        // 1. modifies the browser's current history entry, without reloading
        // window.history.replaceState(null, null, nextURL);

        // 2. adds an entry to the browser's current history, without reloading
         window.history.pushState(null, null, nextURL);
    }

    // event listener to react to input changes in the search bar
    queryElm.addEventListener('input', (e) => {
        if (queryElm.value.length == 0) {
            // clear list
            resultsElm.innerHTML = "";
            // reset results count
            document.getElementById("results-count").innerHTML = ""
            change_url("")
        } else {
            // console.log(queryElm.value)
            resultsElm.innerHTML = "";  // clear lists
            change_url(queryElm.value)
            var results = find_books(queryElm.value);
            add_results_count(results.length)
            results.forEach((bk) => {add_to_results_display(bk)})
        }
    })
});