---

# Dynamic Form Generator

The **Dynamic Form Generator** is a versatile tool for creating dynamic, customizable forms in Angular. It leverages a JSON configuration to define form fields, validations, and messages, enabling seamless integration and flexibility in form design without hardcoding.

## Steps to Use the Dynamic Form Generator

### 1. Install the Package
Use the following command to install the package:
```bash
npm install dynamic-forms-generator
```

---

### 2. Set Up Tailwind CSS

To use this package with **Tailwind CSS**, you'll need to set up Tailwind in your Angular project. Follow these steps to get started:

#### 1. Install Tailwind CSS
Run the following commands to install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### 2. Configure Tailwind
Open the `tailwind.config.js` file and add the following content to enable JIT mode and specify the paths to all your HTML and TS files:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 3. Add Tailwind Directives
In the `src/styles.css` (or `src/styles.scss`) file, add the Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 4. Build the Project
Now, build your Angular project using the following command:

```bash
ng serve
```

Tailwind CSS should now be properly integrated into your project.

---

### 3. Import the Module
In your Angular application's module (e.g., `AppModule`), import the **DynamicFormsGeneratorModule** from the package:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormsGeneratorModule } from 'dynamic-forms-generator';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicFormsGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

### 4. Create the `formJson` Configuration

The `formJson` object defines the structure of the form, including the input types, their labels, default values, and validation rules. Below is a breakdown of how to define various input types and their properties.

---

#### **1. Input Type: String**
This represents a single-line text input.

```typescript
{
  type: "String",
  label: "Service Endpoint URL",
  name: "serviceEndpoint",
  value: "", // Default value
  validators: [
    { validation: "required", message: "Service Endpoint URL is required" },
    {
      validation: "pattern",
      pattern: "^https?://.+",
      message: "The URL must start with http:// or https://",
    },
  ],
}
```

---

#### **2. Input Type: Counter**
This is a numeric input with minimum and maximum values, ideal for inputs like age or quantity.

```typescript
{
  type: "Counter",
  name: "age",
  label: "Age",
  placeholder: "Enter your age",
  min: 18, // Minimum allowed value
  max: 65, // Maximum allowed value
  validators: [
    { validation: "required", message: "Age is required" },
    { validation: "min", value: 18, message: "Age must be at least 18" },
    { validation: "max", value: 65, message: "Age must be at most 65" },
  ],
}
```

---

#### **3. Input Type: Boolean**
This represents a toggle switch or checkbox for true/false values.

```typescript
{
  type: "Boolean",
  label: "Activate Service",
  name: "activateService",
  value: true, // Default value
  validators: [], // No validations required
}
```

---

#### **4. Input Type: Group**
A group is a nested set of inputs that logically belong together.

```typescript
{
  type: "group",
  label: "Advanced Settings",
  name: "AdvancedSettings",
  controls: [
    {
      type: "Boolean",
      label: "Enable Advanced Mode",
      name: "enableAdvancedMode",
      value: false,
      validators: [],
    },
  ],
}
```

---

#### **5. Input Type: Select (Dropdown)**
This is a dropdown selection input with predefined options.

```typescript
{
  type: "select",
  label: "Log Level",
  name: "logLevel",
  value: "INFO", // Default selected option
  options: [
    { value: "DEBUG", label: "Debug" },
    { value: "INFO", label: "Info" },
    { value: "ERROR", label: "Error" },
  ],
  validators: [
    { validation: "required", message: "Log Level is required" },
  ],
}
```

---

#### **6. Input Type: List**
A list is a collection of dynamically added inputs or groups, useful for handling repeated data.

```typescript
{
  type: "list",
  label: "Plugins",
  name: "plugins",
  controls: [
    {
      type: "group",
      label: "Plugin Settings",
      name: "pluginSettings",
      controls: [
        {
          type: "String",
          label: "Plugin Name",
          name: "pluginName",
          value: "",
          validators: [
            { validation: "required", message: "Plugin Name is required" },
          ],
        },
        {
          type: "Boolean",
          label: "Enable Plugin",
          name: "enablePlugin",
          value: true,
          validators: [],
        },
      ],
    },
  ],
}
```

---

### Combining Everything into `formJson`

Here is an example combining all the above types into a single form configuration:

```typescript
formJson = {
  type: "group",
  label: "Web Application Configuration",
  name: "WebAppConfig",
  controls: [
    {
      type: "String",
      label: "Service Endpoint URL",
      name: "serviceEndpoint",
      value: "",
      validators: [
        { validation: "required", message: "Service Endpoint URL is required" },
        {
          validation: "pattern",
          pattern: "^https?://.+",
          message: "The URL must start with http:// or https://",
        },
      ],
    },
    {
      type: "Counter",
      name: "age",
      label: "Age",
      min: 18,
      max: 65,
      validators: [
        { validation: "required", message: "Age is required" },
      ],
    },
    {
      type: "Boolean",
      label: "Activate Service",
      name: "activateService",
      value: true,
    },
    {
      type: "group",
      label: "Advanced Settings",
      name: "AdvancedSettings",
      controls: [
        {
          type: "Boolean",
          label: "Enable Advanced Mode",
          name: "enableAdvancedMode",
          value: false,
        },
      ],
    },
    {
      type: "list",
      label: "Plugins",
      name: "plugins",
      controls: [
        {
          type: "group",
          label: "Plugin Settings",
          name: "pluginSettings",
          controls: [
            {
              type: "String",
              label: "Plugin Name",
              name: "pluginName",
              value: "",
            },
          ],
        },
      ],
    },
  ],
};
```

This modular approach allows you to build complex forms by combining different input types, groups, and lists.

#### Supported Input Types:
1. **String**: Single-line text input.
2. **Boolean**: Toggle or checkbox input.
3. **Counter**: Numeric input with min and max values.
4. **Select**: Dropdown selection with options.
5. **Group**: Nested group of controls.
6. **List**: Repeated groups of controls for dynamic lists.

---

### 4. Pass Parameters to the Component

Use the following parameters to customize the form:

| **Parameter**         | **Description**                                                   | **Example**               |
|-----------------------|-------------------------------------------------------------------|---------------------------|
| `formJson`            | JSON configuration for the form structure and validations.       | `formJson={...}`          |
| `submitFunction`      | Callback function triggered on form submission.                  | `handleSubmit(formData)`  |
| `minWidth`            | Minimum width of the form.                                       | `'400px'`                 |
| `minHeight`           | Minimum height of the form.                                      | `'400px'`                 |
| `border`              | Whether to show a border around the form.                       | `true` or `false`         |
| `borderRadius`        | Corner rounding for the form border.                            | `'10px'`                  |
| `borderSize`          | Thickness of the form border.                                   | `'2px'`                   |
| `borderColor`         | Color of the form border.                                       | `'#007BFF'`               |
| `padding`             | Internal spacing within the form.                              | `'20px'`                  |
| `margin

`              | External spacing around the form.                              | `'10px'`                  |
| `backgroundColor`     | Background color of the form.                                  | `'#FFFFFF'`               |
| `title`               | Title text of the form.                                         | `'Form Title'`            |

---

This setup allows you to quickly integrate a fully customizable dynamic form into your Angular project with Tailwind CSS styling and modular functionality.

### After doing this all you form will look like this

![Form Preview](./images/Screenshot%202024-12-02%20at%2000.19.27.png)