# DynamicFormsGenerator

**DynamicFormsGenerator** is an Angular library designed to simplify the process of creating and managing dynamic forms. With this package, you can define forms through a configuration object and let the library handle form creation, validation, and rendering seamlessly.

## Features

- **Dynamic Form Creation**: Generate forms dynamically based on configuration objects.
- **Validation Support**: Support for built-in and custom validators.
- **Flexible Layout**: Easily customize form layouts and styles.
- **Reusable Components**: Save time by reusing form configurations across your application.
- **Seamless Integration**: Fully compatible with Angular 16+ applications.

## Installation

Install the library using npm:

```bash
npm install dynamic-forms-generator
```

## Getting Started

### 1. Import the Module

Import the `DynamicFormsGeneratorModule` into your application module:

```typescript
import { DynamicFormsGeneratorModule } from 'dynamic-forms-generator';

@NgModule({
  declarations: [
    // your components
  ],
  imports: [
    // other modules
    DynamicFormsGeneratorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 2. Use in a Component

Define a configuration object for your form in the component:

```typescript
formConfig = {
  controls: [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      validators: {
        required: true,
        minLength: 3
      }
    },
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
      validators: {
        required: true,
        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      }
    },
    {
      type: 'number',
      label: 'Age',
      name: 'age',
      placeholder: 'Enter your age',
      validators: {
        required: true,
        min: 18
      }
    },
    {
      type: 'submit',
      label: 'Submit'
    }
  ]
};
```

Bind the configuration to the dynamic form generator in the template:

```html
<app-dynamic-form-generator
  [config]="formConfig"
  (formSubmit)="onSubmit($event)">
</app-dynamic-form-generator>
```

### 3. Handle Form Submission

Add a method in your component to handle form submission:

```typescript
onSubmit(formData: any): void {
  console.log('Form Submitted:', formData);
}
```

## Build

To build the library, run the following command:

```bash
ng build dynamic-forms-generator
```

The build artifacts will be stored in the `dist/` directory.

## Publishing

After building the library, navigate to the `dist/dynamic-forms-generator` directory and publish the package:

```bash
cd dist/dynamic-forms-generator
npm publish
```

## Running Unit Tests

Run the following command to execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test dynamic-forms-generator
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, please open a new issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Support

For additional help or questions, feel free to contact the maintainer or open an issue in the repository.

## Links

- [Angular CLI Documentation](https://angular.io/cli)
- [NPM Package](https://www.npmjs.com/package/dynamic-forms-generator) (to be updated after publishing)

---

Thank you for using **DynamicFormsGenerator**! 🎉