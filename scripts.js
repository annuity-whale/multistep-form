document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    const steps = document.querySelectorAll('.step');

    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle('active', index === step - 1);
        });
    }

    function nextStep() {
        if (currentStep < steps.length) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    }

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', nextStep);
    });

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', prevStep);
    });

    document.getElementById('callback').addEventListener('change', function() {
        const callbackTimeGroup = document.getElementById('callbackTimeGroup');
        if (this.value === 'yes') {
            callbackTimeGroup.style.display = 'block';
        } else {
            callbackTimeGroup.style.display = 'none';
        }
    });

    document.getElementById('multistepForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log('Form submitted:', data);
        alert('Your request has been sent. Thank you!');
    });

    showStep(currentStep);
});
