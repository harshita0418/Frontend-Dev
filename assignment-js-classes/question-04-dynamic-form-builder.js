class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.formData = {};
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        this.fields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.htmlFor = field.name;
            label.textContent = field.label;

            let input;

            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.rows = 4;
            } else if (field.type === 'select') {
                input = document.createElement('select');
                field.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.textContent = option;
                    input.appendChild(opt);
                });
            } else {
                input = document.createElement('input');
                input.type = field.type || 'text';
            }

            input.id = field.name;
            input.name = field.name;
            input.placeholder = field.placeholder || '';

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            container.appendChild(formGroup);
        });
    }

    getFormData() {
        this.formData = {};
        this.fields.forEach(field => {
            const element = document.getElementById(field.name);
            if (element) {
                this.formData[field.name] = element.value;
            }
        });
        return this.formData;
    }
}

const fields = [
    { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter username' },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter email' },
    { name: 'country', type: 'select', label: 'Country', options: ['USA', 'Canada', 'UK', 'India', 'Australia'] },
    { name: 'message', type: 'textarea', label: 'Message', placeholder: 'Enter your message' }
];

const formBuilder = new FormBuilder(fields);
formBuilder.render('formContainer');

function handleSubmit() {
    const data = formBuilder.getFormData();
    const output = document.getElementById('output');
    output.textContent = 'Form Data:\n' + JSON.stringify(data, null, 2);
    output.classList.add('show');
}
