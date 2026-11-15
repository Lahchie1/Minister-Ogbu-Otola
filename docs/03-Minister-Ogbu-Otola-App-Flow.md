# 3. App Flow

**Product:** Minister Ogbu Otola Personal Website  
**Derived strictly from the accepted PRD**

---

**Entry points:**  
Direct URL / search / social media share / links from church channels or the minister’s existing online presence.

**Screen inventory:**  
- Home  
- About the Minister  
- Books (listing + individual book detail if needed)  
- Resources / Study Links  
- Blog / Teaching (list + single post)  
- Contact / Inquiry  
- Simple success / thank-you state after form submission

**Primary journey:**  
Home → Books or Resources → View details / click external link or submit inquiry → Thank-you / external site.

**Alternate journeys:**  
- Home → About → Contact  
- Any page → Contact form  
- Blog post → related book or resource link  
- Cancel / back navigation from any page

**For each key action:**  
- Click external book or resource link → opens in new tab.  
- Submit inquiry form → client-side validation, loading state, success state (thank-you message), error state.  
- Navigate between main sections → standard browser back/forward and clear menu.

**Navigation rules:**  
- Persistent simple top navigation: Home, About, Books, Resources, Blog, Contact.  
- Mobile: hamburger or clean stacked menu.  
- No complex deep linking required in v1.

**Empty and blocked states:**  
- Books page with no books yet → clear empty state + message.  
- Resources with no links → empty state.  
- Form offline or submission failure → clear error message.

**First-use journey:**  
Visitor lands → immediately understands this is the minister’s site focused on teaching, books, and sound study resources → can reach the two highest-value sections (Books and Resources) in one click.
