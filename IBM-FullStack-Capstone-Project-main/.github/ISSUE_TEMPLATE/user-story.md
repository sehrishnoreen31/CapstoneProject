## User Stories for GiftLink Project

### 1. User Registration  
**As a** new user,  
**I want to** register an account with my name, email, and password,  
**So that** I can access the GiftLink platform and start giving away or finding items.  

**Acceptance Criteria**:  
- Registration form includes fields for name, email, and password.  
- Success message displayed upon successful registration.  
- User data is stored securely in MongoDB.  

---

### 2. User Login  
**As a** registered user,  
**I want to** log in using my email and password,  
**So that** I can access my profile and interact with the platform.  

**Acceptance Criteria**:  
- Login form validates credentials.  
- Successful login redirects to the home page.  
- JWT is used for secure authentication.  

---

### 3. Browse Listings  
**As a** user,  
**I want to** browse available household items on the listings page,  
**So that** I can find items I need.  

**Acceptance Criteria**:  
- Listings page displays item cards with images, titles, and descriptions.  
- Items are fetched from the backend via API.  
- Pagination or infinite scroll is implemented for large datasets.  

---

### 4. Search Items  
**As a** user,  
**I want to** search for items by keywords or filters (e.g., category, location),  
**So that** I can quickly find relevant items.  

**Acceptance Criteria**:  
- Search bar accepts input and filters results dynamically.  
- Backend API supports multi-parameter search.  
- Results update without page reload.  

---

### 5. View Item Details  
**As a** user,  
**I want to** click on an item to see its full details (description, condition, location),  
**So that** I can decide whether to request it.  

**Acceptance Criteria**:  
- Details page shows all relevant item information.  
- Option to contact the giver is available.  
- Backend API fetches item details by ID.  

---

### 6. Post an Item  
**As a** user,  
**I want to** post an item I no longer need by filling out a form,  
**So that** others can find and request it.  

**Acceptance Criteria**:  
- Form includes fields for title, description, condition, and image upload.  
- Item is saved to MongoDB via backend API.  
- Success notification is displayed.  

---

### 7. Edit User Profile  
**As a** user,  
**I want to** edit my profile information (e.g., name, location, preferences),  
**So that** my account details are up to date.  

**Acceptance Criteria**:  
- Profile page allows editing and saving changes.  
- Backend API updates user data securely.  
- Changes are reflected immediately.  

---

### 8. Secure Logout  
**As a** logged-in user,  
**I want to** log out of my account,  
**So that** my session is securely ended.  

**Acceptance Criteria**:  
- Logout button is accessible from the navigation bar.  
- Session token is invalidated.  
- User is redirected to the login page.  