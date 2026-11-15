# 5. Backend Schema

**Product:** Minister Ogbu Otola Personal Website  
**Derived strictly from the accepted PRD**

---

**Entities:**  
- Book  
- ResourceLink  
- Inquiry (form submissions)  
- BlogPost

**Book:**  
- id, title, slug, description (short), coverImageUrl, purchaseLinks (array of {label, url}), publishedDate (optional), isPublished (boolean), order

**ResourceLink:**  
- id, title, url, description (short), category (optional), order, isPublished

**Inquiry:**  
- id, name, email, message, type (book / general), createdAt, status (new / responded)

**BlogPost:**  
- id, title, slug, content, excerpt, publishedAt, isPublished

**Relationships:**  
None complex. Books and ResourceLinks are independent. Inquiries are standalone.

**User ownership:**  
All content owned by the site/minister. No multi-user ownership in v1.

**Authentication flow:**  
None for public users.

**Authorization rules:**  
Public can read all published content and submit inquiries. Only admin can create/edit/delete content.

**Data validation:**  
- Required fields enforced.  
- URLs must be valid.  
- Email format validated on inquiry form.  
- Reasonable length limits on text fields.

**Retention and deletion:**  
Inquiry data retained until responded to, then can be archived or deleted. No long-term personal data storage required.

**Migration and seed data:**  
Initial books and resource links seeded from content provided (placeholders accepted for now). Simple Markdown or JSON import acceptable.
