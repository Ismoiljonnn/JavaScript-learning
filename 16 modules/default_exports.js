// Default Exports - used to export a single primary value, function, or class per module.
// Can be imported with any custom name without using curly braces.

export default function User(name) {
  this.name = name;
}

// Or exporting an anonymous function/value as default:
// export default () => 'Default exported function';