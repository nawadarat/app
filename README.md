# Nawadarat

App for nawadarat

## Features

### User Management

Authentication of users. Primary user super admin. To access application and perform actions]

### Organizations

Add organisation profile

* Name
* Address, Email, Phone
* Logos

### Services

List all services

### Vendors

List all service providers

### Customers

List all customers with contact information

### Accounts

List of services offered to certain customers

## Maqasid

* Manage accounts
* Track accounts expiry and renewals
* Generate Invoices 
* Calculate profits and losses
* Automate Invoice Generation
* Automate notifications
  * Emails
  * SMS
* Generate Reports

## To Do

- [x] Backend: Firebace (for now)
- [x] List Features of the application
- [x] Create components and modules
- [ ] Improve components and modules
- [ ] Implement Routing
- [ ] Auth Module (Using firebase)
- [ ] Implement authgaurds on routes
- [ ] Create communicator service
- [ ] Decide on Framework
- [ ] Create feature-wise modules and components


## To Do Later

- [ ] Set app title globally
- [ ] Incorporate font icons https://stackoverflow.com/questions/32612690/bootstrap-4-glyphicons-migration
- [ ] Make custom APIs (PHP/Node.js)
- [ ] Batch Email Send from Action List
- [ ] Auto Complete list with Accounts
- [ ] Error Handling in account listing. AccountsService, return error to observable


## Notes
* Had to declare the Navbar Component in the appModule because the routerLink did not work. I believe this is becuase it has something to do with lazy loading or child routes.
