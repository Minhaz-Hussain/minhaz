const completedCheckbox = document.querySelectorAll('.checkbox');
const goalInput = document.querySelectorAll('.goal-input');
const progressBar = document.querySelector('.progress-bar');
const progressAmount = document.querySelector('.progress-amount');
const statusQuote = document.querySelector('.raise');
const progressAmountSpan = document.querySelector('.progress-amount span');

const allGoals = JSON.parse(localStorage.getItem('individualGoals')) || {
    first: {
        goal: '',
        completed: false,
    },
    second: {
        goal: '',
        completed: false,
    },
    third: {
        goal: '',
        completed: false,
    }
};

let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;

const allStatus = [
    'Raise the bar by completing your goals!',
    'Well done! Only two more to go',
    'Amazing! You\'re on a roll. One more to go!',
    'Congratulations! You have completed all your goals for the day 🥳'
];

statusQuote.innerText = allStatus[completedGoalsCount];

progressAmount.style.width = `${completedGoalsCount *100 /3}%`;
progressAmount.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;

completedCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        const allGoalsAdded = [...goalInput].every((input) => {
            return input.value;
        });        
        if(allGoalsAdded) {
            checkbox.parentElement.classList.toggle('completed');
            const inputId = checkbox.nextElementSibling.id;
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length;
            progressAmount.style.width = `${completedGoalsCount *100 /3}%`
            progressAmount.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
            statusQuote.innerText = allStatus[completedGoalsCount];
            localStorage.setItem('individualGoals', JSON.stringify(allGoals));
        } else {
            progressBar.classList.add('show')
        };

    
    });
});

goalInput.forEach((input) => {
    input.value = allGoals[input.id].goal

    if(allGoals[input.id].completed) {
        input.parentElement.classList.add('completed')
    }

    input.addEventListener('focus', () => {
        progressBar.classList.remove('show')
    })

    input.addEventListener('input', () => {
        if(allGoals[input.id].completed) {
            input.value = allGoals[input.id].goal;
            return
        }
        allGoals[input.id] = {
            goal: input.value,
            completed: false,
        }
        localStorage.setItem('individualGoals', JSON.stringify(allGoals));
    })
});

