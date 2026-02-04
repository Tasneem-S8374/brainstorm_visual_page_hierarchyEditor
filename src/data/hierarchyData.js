export const hierarchy = [
  { id: "home", label: "Home", level: 1 },
  { id: "about", label: "About", parent: "home", level: 2 },
  { id: "services", label: "Services", parent: "home", level: 2 },
  { id: "blog", label: "Blog", parent: "home", level: 2 },
  { id: "contact", label: "Contact", parent: "home", level: 2 },
  { id: "service1", label: "Service Detail 1", parent: "services", level: 3 },
  { id: "service2", label: "Service Detail 2", parent: "services", level: 3 },
  { id: "blog1", label: "Blog Post 1", parent: "blog", level: 3 },
  { id: "blog2", label: "Blog Post 2", parent: "blog", level: 3 },
  { id: "author", label: "Author Page", parent: "blog", level: 3 },
  { id: "location", label: "Location Info", parent: "contact", level: 3 },
  { id: "support", label: "Support Page", parent: "contact", level: 3 },
];
