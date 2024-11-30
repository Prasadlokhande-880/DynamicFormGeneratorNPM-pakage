# Dynamic Form Generator

The **Dynamic Form Generator** is a versatile tool for creating dynamic, customizable forms in Angular. It leverages a JSON configuration to define form fields, validations, and messages, enabling seamless integration and flexibility in form design without hardcoding.

## How to Use the NPM Package
## Steps to Use the Dynamic Form Generator

### 1. Install the Package
Use the following command to install the package:
```bash
npm install dynamic-forms-generator
```

---

### 2. Import the Module
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

### 3. Create the `formJson` Configuration

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
| `margin`              | External spacing around the form.                              | `'10px'`                  |
| `submitButtonLabel`   | Text for the submit button.                                      | `'Save Changes'`          |
| `cancelButtonLabel`   | Text for the cancel button.                                      | `'Discard'`               |

---

With these steps, you'll be able to integrate and customize the **Dynamic Form Generator** in your Angular project effectively!

### 4. Adding Custom CSS to the Form

You can style your form elements and their validation messages by leveraging predefined class names. These class names allow you to customize the appearance of headings, labels, input types, and error messages.

---

#### **1. Styling Headings**
To style form headings, use the class name `form-label-heading`.

```css
.form-label-heading {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007BFF;
  margin-bottom: 10px;
}
```

---

#### **2. Styling Labels**
To style labels for form inputs, use the class name `label`.

```css
.label {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
  display: block;
}
```

---

#### **3. Styling Input Types**

Each input type has its own class name for targeted styling.

##### **a) String Input**
Use the class name `string-input` to style text inputs.

```css
.string-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-size: 1rem;
}
.string-input:focus {
  border-color: #007BFF;
  outline: none;
}
```

##### **b) Select Input**
Use the class name `select-input` for dropdowns.

```css
.select-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  font-size: 1rem;
  background-color: #fff;
}
.select-input:focus {
  border-color: #007BFF;
  outline: none;
}
```

##### **c) Number Input**
Use the class name `number-input` for counter or numeric inputs.

```css
.number-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  font-size: 1rem;
}
.number-input:focus {
  border-color: #007BFF;
  outline: none;
}
```

##### **d) Checkbox Input**
Use the class name `checkbox-input` for checkboxes or toggle inputs.

```css
.checkbox-input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  accent-color: #007BFF;
}
```

---

#### **4. Styling Validation Messages**

To style error messages for validation, use the class name `validation-message`.

```css
.validation-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
  display: block;
}
```

---

#### Example of Applying CSS Classes with Validation Messages

Here’s how the form template might look with these classes applied:

```html
<div class="form-group">
  <h2 class="form-label-heading">Web Application Configuration</h2>

  <label class="label" for="serviceEndpoint">Service Endpoint URL</label>
  <input
    id="serviceEndpoint"
    type="text"
    class="string-input"
    placeholder="Enter URL"
  />
  <span class="validation-message">Service Endpoint URL is required.</span>

  <label class="label" for="logLevel">Log Level</label>
  <select id="logLevel" class="select-input">
    <option value="INFO">Info</option>
    <option value="DEBUG">Debug</option>
    <option value="ERROR">Error</option>
  </select>
  <span class="validation-message">Log Level is required.</span>

  <label class="label" for="age">Age</label>
  <input
    id="age"
    type="number"
    class="number-input"
    min="18"
    max="65"
    placeholder="Enter your age"
  />
  <span class="validation-message">Age must be between 18 and 65.</span>

  <label class="label" for="activateService">Activate Service</label>
  <input id="activateService" type="checkbox" class="checkbox-input" />
</div>
```

---

With these class names, you can ensure a consistent and visually appealing design while highlighting validation errors effectively.