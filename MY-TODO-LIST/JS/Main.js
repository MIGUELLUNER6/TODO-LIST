const wrapper = document.querySelector('.wrapper'),
      backBtm = document.querySelector('.back_btn'),
      menuBtn = document.querySelector('.menu_btn');
   
const toggleScreen = () => {
  wrapper.classList.toggle('show_category');
}

menuBtn.addEventListener('click', toggleScreen);   
backBtm.addEventListener('click', toggleScreen);

const addTaskBtn = document.querySelector('.add_task_btn'),
      addTaskForm = document.querySelector('.add_task'),
      blackBackDrop = document.querySelector('.black_backdrop');
      
const toggleAddTaskForm = () => {
  addTaskForm.classList.toggle('active');
  blackBackDrop.classList.toggle('active');
  addTaskBtn.classList.toggle('active');
}

addTaskBtn.addEventListener('click', toggleAddTaskForm);
blackBackDrop.addEventListener('click', toggleAddTaskForm);

// let's add categories and tasks
let categories = [
  {
    title: 'Personal',
    img: 'man.png'
  },
  
  {
    title: 'Work',
    img: 'briefcase.png'
  },
   {
     title: 'Shopping',
     img: 'shopping-bag.png'
   },
   {
     title: 'Coding',
     img: 'code.png'
   },
   {
     title: 'Health',
     img: 'heart.png'
   },
   {
     title: 'Fitness',
     img: 'exercise.png'
   },
   {
     title: 'Education',
     img: 'education.png'
   },
   {
     title: 'Finance',
     img: 'finance.png'
   },
  ];
  
  let tasks = [
    {
      id: 1,
      task: 'Engage in full-stack development',
      category: 'Coding',
      completed: false,
    },
    {
      id: 2,
      task: 'Collect an SRS document',
      category: 'Work',
      completed: false,
    },
    {
      id: 3,
      task: 'Go to work',
      category: 'Work',
      completed: false,
    },
    {
      id: 4,
      task: 'Join an art class',
      category: 'Personal',
      completed: false,
    },
    {
      id: 5,
      task: '30 minutes of work out',
      category: 'Fitness',
      completed: false,
    },
    {
      id: 6,
      task: 'Eat a balanced diet',
      category: 'Health',
      completed: false,
    },
    {
      id: 7,
      task: 'Learn Kotlin',
      category: 'Education',
      completed: false,
    },
    {
      id: 8,
      task: 'Play video Games',
      category: 'Personal',
      completed: false,
    },
    {
      id: 9,
      task: 'Deposit some Money',
      category: 'Finance',
      completed: false,
    },
    {
      id: 10,
      task: 'Read about Groceries',
      category: 'Shopping',
      completed: false,
    },
    {
      id: 11,
      task: 'Watch a movie',
      category: 'Personal',
      completed: false,
    },
    {
      id: 12,
      task: 'Build a personal Portfolio',
      category: 'Coding',
      completed: false,
    },
    {
      id: 13,
      task: 'Try a new healthy recipe',
      category: 'Health',
      completed: false,
    },
    {
      id: 14,
      task: 'Attend a yoga class',
      category: 'Fitness',
      completed: false,
    },
    {
      id: 15,
      task: 'Read an article abouta  new topic',
      category: 'Education',
      completed: false,
    },
    {
      id: 16,
      task: 'Set up automatic bill payments',
      category: 'Finance',
      completed: false,
    },
    {
      id: 17,
      task: 'Buy new clothes',
      category: 'Shopping',
      completed: false,
    },
    {
      id: 18,
      task: 'Go for medical checkup',
      category: 'Health',
      completed: false,
    },
    {
      id: 19,
      task: 'Jog for a kilometre',
      category: 'Fitness',
      completed: false,
    },
    {
      id: 20,
      task: 'Withdrawal some Cash',
      category: 'Finance',
      completed: false,
    },
    {
      id: 21,
      task: 'Program',
      category: 'Coding',
      completed: false,
    },
    {
      id: 22,
      task: 'Go for a run',
      category: 'Fitness',
      completed: false,
    },
    {
      id: 23,
      task: 'Learn a newlanguage Online',
      category: 'Education',
      completed: false,
    },
    {
      id: 24,
      task: 'Read about History',
      category: 'Education',
      completed: false,
    },
    {
      id: 25,
      task: 'Review investment portfolio',
      category: 'Finance',
      completed: false,
    },
    ];
    
let selectedCategories = categories[0];
/*console.log(selectedCategories);*/

    
const categoriesContainer = document.querySelector('.categories');
      categoryTitle = document.querySelector('.category_title'),
      totalCategoryTasks = document.querySelector('.category_tasks'),
      categoryImg = document.querySelector('#category_img'),
      totalTasks = document.querySelector('.totalTasks');
      
const calculateTotal = () => {
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategories.title.toLowerCase()
  );
  totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
  totalTasks.innerHTML = tasks.length;
};


const taskContainer = document.querySelector('.tasks');

const renderCategories = () => {
  categoriesContainer.innerHTML = '';
  categories.forEach((category) => {
    // Get all the tasks for current category 
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    
    // Creat a div to render category 
    const div = document.createElement('div');
    div.classList.add('category');
    div.addEventListener('click', () => {
     wrapper.classList.add('show_category');
     selectedCategories = category;
     categoryTitle.innerHTML = category.title;
     categoryImg.src = `img/${category.img}`;
     calculateTotal();
     // render tasks when category changes
    renderTasks();
    });
      div.innerHTML = `
    <div class="left">
             <img src="img/${category.img}" width="75rem" alt="${category.title}">
             <div class="content">
               <h1>${category.title}</h1>
               <p>${categoryTasks.length} Tasks. </p>
             </div>
            </div>
            <div class="options">
             <div class="toggle_btn">
               <svg
               xmlns="http://www.w3.org/2000/svg" 
               fill="none"
               stroke-width="1.5"
               stroke="currentColor"
               viewBox="0 0 24 24">
                 <path 
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                 </svg>
             </div> 
            </div>
    `;
    
    categoriesContainer.appendChild(div);
  });
}

const renderTasks = () => {
  taskContainer.innerHTML = '';
  
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategories.title.toLowerCase()
  );
  
  // If no task for selected category 
  if (categoryTasks.length === 0) {
    taskContainer.innerHTML = `
    <p class="no_task">No task for this category</p>
    `
  }else {
    // If there is any task render them 
    categoryTasks.forEach((task) => {
      const div = document.createElement('div');
      div.classList.add('task_wrapper');
      const label = document.createElement('label');
      label.classList.add('task');
      label.setAttribute('for', task.id);
      const checkbox = document.createElement('input');
         checkbox.type = 'checkbox';
         checkbox.id = task.id;
         checkbox.checked = task.completed;
         
         // Add completion functionality on checkbox 
         checkbox.addEventListener('change', () => {
           const index = tasks.findIndex((t) => t.id === task.id);
           // Change to true or false and vice versa
           tasks[index].completed = !tasks[index].completed;
           // save in local
           saveLocal();
         });
         
         div.innerHTML = `
         <div class="delete">
                 <svg 
                 xmlns="http://www.w3.org/2000/svg"
                 width="14" 
                 height="15" 
                 fill="none"
                 stroke-width="1.5"
                 stroke="currentColor"
                 viewBox="0 0 24 24">
                   <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"/>
                   <path d="M9 10h2v8H9zm4 0h2v8h-2z"/>
                   </svg>
               </div>
         `;
         
         label.innerHTML = `
         <span class="checkmark">
                 <svg
                 xmlns="http://www.w3.org/2000/svg" 
                 fill="none"
                 stroke-width="1.5"
                 stroke="currentColor"
                 viewBox="0 0 24 24">
                   <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"/></svg>
               </span>
               <p>${task.task}</p>
         `;
         
         label.prepend(checkbox);
         div.prepend(label);
         taskContainer.appendChild(div);
         
         // Delete functionality 
         const deleteBtn = div.querySelector('.delete');
         deleteBtn.addEventListener('click', () => {
           const index = tasks.findIndex((t) => t.id === task.id);
           
           tasks.splice(index, 1);
           saveLocal();
           renderTasks(); 
         });
    });
    renderCategories();
    calculateTotal();
  }
};

// Save and get tasks form local storage 
let saveLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

let getLocal = () => {
  let localTasks = JSON.parse(localStorage.getItem(tasks));
  
  // if tasks found 
  if (localTasks) {
    tasks = localTasks;
  }
};

// functionality to add categories

// render all the categories selected
const categorySelect = document.querySelector('#category_select');
const cancelBtn = document.querySelector('.cancel_btn');
const addBtn = document.querySelector('.add_btn');
const taskInput = document.querySelector('#task_input');

cancelBtn.addEventListener('click', toggleAddTaskForm);

addBtn.addEventListener('click', () => {
  const task = taskInput.value;
  const category = categorySelect.value;
  
  if (task === '') {
    alert('Please enter a valid task');
  }else {
    const newTask = {
      id: tasks.length + 1,
      task,
      category,
      completed: false,
    }
    tasks.push(newTask);
    taskInput.value = '';
    saveLocal();
    toggleAddTaskForm();
    renderTasks()
  }
});

categories.forEach((category) => {
  const option = document.createElement('option');
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
  
});

// These are all already stored tasks
getLocal();    
calculateTotal();
renderTasks();