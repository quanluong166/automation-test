# SauceDemo Test Cases

## Metadata

- Project: SauceDemo Playwright Automation
- Target URL: `https://www.saucedemo.com/`
- Tech stack: Playwright + TypeScript
- Version: `v0.1`
- Last updated: `2026-03-05`

## Priority Guide

- `P0`: critical smoke/business flow
- `P1`: important regression
- `P2`: nice-to-have/extended coverage

## Test Cases

| ID | Title | Priority | Preconditions | Steps | Expected Result |
|---|---|---|---|---|---|
| AUTH-01 | Login successfully with valid user | P0 | Open login page | Enter `standard_user` / `secret_sauce`, click Login | Navigate to `inventory.html`, products list visible |
| AUTH-02 | Login fail with invalid credentials | P0 | Open login page | Enter invalid username/password, click Login | Error: `Username and password do not match...` |
| AUTH-03 | Login fail for locked user | P0 | Open login page | Enter `locked_out_user` / `secret_sauce`, click Login | Error: `Sorry, this user has been locked out.` |
| AUTH-04 | Validation when fields are empty | P1 | Open login page | Click Login without input | Proper validation error is shown |
| AUTH-05 | Logout from side menu | P0 | Logged in | Open menu, click Logout | Return to login page |
| INV-01 | Verify inventory item count | P0 | Logged in to inventory | Count product cards | Exactly 6 products shown |
| INV-02 | Sort by Name A-Z | P1 | Logged in to inventory | Select sort A-Z | Product names are ascending |
| INV-03 | Sort by Name Z-A | P1 | Logged in to inventory | Select sort Z-A | Product names are descending |
| INV-04 | Sort by Price low-high | P1 | Logged in to inventory | Select sort low-high | Prices are ascending |
| INV-05 | Sort by Price high-low | P1 | Logged in to inventory | Select sort high-low | Prices are descending |
| INV-06 | Add item to cart from inventory | P0 | Logged in to inventory | Click Add to cart on a product | Button changes to Remove, cart badge increments |
| INV-07 | Remove item from inventory | P0 | Item already added | Click Remove | Button reverts to Add to cart, badge decrements |
| CART-01 | Cart badge count correctness | P0 | Logged in | Add/remove multiple items | Badge value matches selected item count |
| CART-02 | Cart item details correctness | P0 | At least 1 item in cart | Open cart page | Correct item name, qty, and price are shown |
| CART-03 | Remove item from cart page | P0 | At least 1 item in cart | Open cart and click Remove | Item removed and count updated |
| CART-04 | Continue shopping from cart | P1 | On cart page | Click Continue Shopping | Return to inventory page |
| CHK1-01 | Checkout validation: missing first name | P0 | Have item in cart, open checkout step 1 | Leave first name empty, click Continue | Error: `First Name is required` |
| CHK1-02 | Checkout validation: missing last name | P0 | Have item in cart, open checkout step 1 | Leave last name empty, click Continue | Error: `Last Name is required` |
| CHK1-03 | Checkout validation: missing postal code | P0 | Have item in cart, open checkout step 1 | Leave postal code empty, click Continue | Error: `Postal Code is required` |
| CHK1-04 | Checkout step 1 valid input | P0 | Have item in cart, open checkout step 1 | Enter first/last/postal and Continue | Navigate to `checkout-step-two.html` |
| CHK2-01 | Overview details displayed | P0 | Reached checkout step 2 | Inspect summary area | Item, payment, shipping info visible |
| CHK2-02 | Total calculation correctness | P0 | Reached checkout step 2 | Read item total, tax, total | `total = item total + tax` |
| CHK2-03 | Cancel from checkout overview | P1 | Reached checkout step 2 | Click Cancel | Return to inventory page |
| CHK2-04 | Finish checkout successfully | P0 | Reached checkout step 2 | Click Finish | Navigate to complete page with thank-you message |
| CHK2-05 | Back Home from complete page | P1 | On complete page | Click Back Home | Return to inventory page |
| MENU-01 | Reset app state clears cart | P1 | Logged in with items in cart | Open menu and click Reset App State | Cart/badge reset to empty |
| MENU-02 | About link navigation | P2 | Logged in | Open menu and click About | Open Sauce Labs site |
| LINK-01 | Footer social links | P2 | On inventory/cart/checkout page | Click Twitter/Facebook/LinkedIn | Open corresponding expected URLs |

## Smoke Scope (Phase 1 Automation)

- `AUTH-01`, `AUTH-02`, `AUTH-03`
- `INV-06`
- `CART-02`
- `CHK1-01`, `CHK1-04`
- `CHK2-02`, `CHK2-04`

