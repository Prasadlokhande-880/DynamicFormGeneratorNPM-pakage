import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formJson = {
    type: "group",
    label: "Web Application Configuration",
    name: "WebAppConfig",
    controls: [
      {
        type: "String",
        label: "Advanced Configuration File Path",
        name: "advancedConfigPath",
        value: "/etc/bookstore/advanced-config.json",
        validators: [
          {
            validation: "required",
            message: "Advanced Configuration File Path is required",
          },
          {
            validation: "pattern",
            pattern: "^/[^/].+",
            message: "Path must be an absolute path starting with '/'",
          },
        ],
      },
      {
        type: "Counter",
        name: "age",
        label: "Age",
        placeholder: "Enter your age",
        min: 18,
        max: 65,
        validators: [
          { validation: "required", message: "Age is required" },
          { validation: "min", value: 18, message: "Age must be at least 18" },
          { validation: "max", value: 65, message: "Age must be at most 65" },
        ],
      },
      {
        type: "Counter",
        name: "age",
        label: "Age",
        placeholder: "Enter your age",
        min: 18,
        max: 65,
        validators: [
          { validation: "required", message: "Age is required" },
          { validation: "min", value: 18, message: "Age must be at least 18" },
          { validation: "max", value: 65, message: "Age must be at most 65" },
        ],
      },
      {
        type: "Boolean",
        label: "Activate Service",
        name: "activateService",
        value: true,
        validators: [],
      },
      {
        type: "String",
        label: "Service Endpoint URL",
        name: "serviceEndpoint",
        value: "",
        validators: [
          {
            validation: "required",
            message: "Service Endpoint URL is required---",
          },
          {
            validation: "pattern",
            pattern: "^https?://.+",
            message: "The URL must start with http:// or https://",
          },
        ],
      },
      {
        type: "Boolean",
        label: "Enable Logging",
        name: "enableLogging",
        value: true,
        validators: [],
      },
      {
        type: "String",
        label: "Log Directory",
        name: "logDirectory",
        value: "/var/logs/bookstore",
        validators: [
          { validation: "required", message: "Log Directory is required" },
          {
            validation: "pattern",
            pattern: "^/[^/].+",
            message: "Log Directory must be an absolute path starting with '/'",
          },
        ],
      },
      {
        type: "select",
        label: "Log Level",
        name: "logLevel",
        value: "INFO",
        options: [
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
          { value: "uk", label: "United Kingdom" },
          { value: "au", label: "Australia" },
        ],
        validators: [
          { validation: "required", message: "Log Level is required" },
        ],
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
            validators: [],
          },
          {
            type: "String",
            label: "Advanced Configuration File Path",
            name: "advancedConfigPath",
            value: "/etc/bookstore/advanced-config.json",
            validators: [
              {
                validation: "required",
                message: "Advanced Configuration File Path is required",
              },
              {
                validation: "pattern",
                pattern: "^/[^/].+",
                message: "Path must be an absolute path starting with '/'",
              },
            ],
          },
          {
            type: "Boolean",
            label: "Enable Debugging",
            name: "enableDebugging",
            value: true,
            validators: [],
          },
          {
            type: "String",
            label: "Debug Log Directory",
            name: "debugLogDirectory",
            value: "/var/logs/bookstore/debug",
            validators: [
              {
                validation: "required",
                message: "Debug Log Directory is required",
              },
              {
                validation: "pattern",
                pattern: "^/[^/].+",
                message:
                  "Debug Log Directory must be an absolute path starting with '/'",
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
                    type: "select",
                    label: "Log Level",
                    name: "logLevel",
                    value: "INFO",
                    options: [
                      { value: "us", label: "United States" },
                      { value: "ca", label: "Canada" },
                      { value: "uk", label: "United Kingdom" },
                      { value: "au", label: "Australia" },
                    ],
                    validators: [
                      {
                        validation: "required",
                        message: "Log Level is required",
                      },
                    ],
                  },
                  {
                    type: "String",
                    label: "Service Endpoint URL",
                    name: "serviceEndpoint",
                    value: "",
                    validators: [
                      {
                        validation: "required",
                        message: "Service Endpoint URL is required---",
                      },
                      {
                        validation: "pattern",
                        pattern: "^https?://.+",
                        message: "The URL must start with http:// or https://",
                      },
                    ],
                  },
                  {
                    type: "Boolean",
                    label: "Enable Plugin",
                    name: "enablePlugin",
                    value: true,
                    validators: [],
                  },
                  {
                    type: "String",
                    label: "Plugin Name",
                    name: "pluginName",
                    value: "InventoryPlugin",
                    validators: [
                      {
                        validation: "required",
                        message: "Plugin Name is required",
                      },
                      {
                        validation: "minLength",
                        value: 3,
                        message:
                          "Plugin Name must be at least 3 characters long",
                      },
                    ],
                  },
                  {
                    type: "Boolean",
                    label: "Plugin Debug Mode",
                    name: "pluginDebugMode",
                    value: false,
                    validators: [],
                  },
                  {
                    type: "String",
                    label: "Plugin Configuration File",
                    name: "pluginConfigFile",
                    value: "/etc/bookstore/plugins/inventory.json",
                    validators: [
                      {
                        validation: "required",
                        message: "Plugin Configuration File is required",
                      },
                      {
                        pattern: "^/[^/].+",
                        message:
                          "Configuration File Path must be an absolute path starting with '/'",
                      },
                    ],
                  },
                  {
                    type: "Boolean",
                    label: "Enable Advanced Mode",
                    name: "enableAdvancedMode",
                    value: false,
                    validators: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  handleSubmit(formData: any): void {
    console.log('Custom Submit Function Called:', formData);
  }

}
