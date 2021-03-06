

Todo
[ ] User can create account
[ ] User can add reward
[ ] Redirect creates new Lead with user based on session
[ ] User can invite people with email


Flow

1. Get or create a User
-----------------------

- is there a cookie?
  yes : find the user and attach
  no :
    - is there a user with this ip address / session ID?
      yes : attach this user
      no : create a new user

2. Get or create a Lead
-----------------------

- is there a Lead for this reward and user?
  yes: do nothing
  no: create one with the User

3. Then redirect to the Lead page for this User
-----------------------------------------------


Rewarding Platform (CRM system?)
================================

Easy Lead Management

## Target audience
People without a CRM system (freelancers, small companies, legal person)

## Goal
Help me find someone (company, customer, legal person) that is interested
in fulfilling my reward (buy product, find employee, buy my house/car/second hand stuff/creative stuff)

## In return
You get a reward when you helped my find someone that meets my reward criteria

## Reward criteria
- got reply on email (10 cent)
- got valid phone number (50 cent)
- requests a brochure (3 euro)
- buys the product (300 euro)
- subscribes to mailing list (50 cent)
- comes over to office (10 euro)
- find someone that finds someone (10% of the reward)
- got over x number of views/clicks (x euro)

## Forms:
We need to contact the user to meet the reward criteria.
This can be done in three ways:
1. Mail me: email
2. Call me: phone number
3. Send me: address

## System
- The user sees a list of follow-ups for their rewards.
- Sync with CRM system to match user? Not needed, because of target audience
- Referrer can claim a reward of there is no payment yet. This triggers a trial like flow.


1. Start a Reward
2. Add rewards

## Inspirations

Patreon:
- Has multiple products and milestones (member count)
- Has a nice profile page with products
- Has a blog or news feed on the profile page
- They have similar backend things to manage

MailChimp:
- it focusses on one thing
- it can import or export users to other systems


### Example Reward

Would you like to ... ?

### Reward 1: Annual report
Deliver us a person who takes a service from us, and you will be rewarded 300 euro.

### Reward 2: Number of views
Deliver us 1000 views and you will receive 10 euro.

### Reward 3: Appointment
When a person comes to the office, you will receive 20 euro.  



## Example profiles
- company that has services (Bas)
- freelancers with services (Rick)
- people selling their house
- people selling second hand stuff (Marktplaats)
- people selling creative stuff (Patreon)

# Facts / Assumptions
- Small companies/freelancers want simple and affordable management systems.
- Companies/freelancers are willing to try things on a no cure no pay basis.
- Consumers are sharing and mentioning things on social media, but they don't get paid for it.
- Consumers are competitive and like incentives.
- A company sharing products on social media is not targeted.

Ideas
- Rewarding freelancer to freelancer network?
- Do we need a bonus or discount for the end customer to trigger signing up?


## Viewer
query Viewer {
  viewer {
    name
    profile {
      name
      description
      user {
        email
        name
      }
      rewards {
        name
        description
        value
      }
      leads {
        user {
          name
          email
        }
        hash
      }
    }
  }
}

## Request token
mutation token {
  requestToken(email:"one@email.com", password:"test") {
    ok
    token
  }
}


## Example
query viewer {
  viewer {
    name
    email
    profile {
      name
      description
      rewards {
        name
        description
        value
        currency
      }
      leads {
        name
        email
        referrers {
          name
          email
        }
        fulfills {
          name
          value
        }
      }
      claims {
        from {
          name
          email
        }
        subject {
          name
          email
        }
        reward {
          name
          value
        }
        status
      }
    }

  }
  profiles {
    name
    description
    rewards {
      name
      description
      value
    }
  }
  events {

  }
}

mutation token {
  requestToken(email:"one@email.com", password:"test") {
    ok
    token
  }
}



## Conversion paths

### 1
A creates profile
B sees profile
B enters own email/telephone
B hits button to be contacted
A emails/calls B
B turns into sale
A accepts lead and no one needs a reward

### 2
A creates profile
B sees profile
B enters email/telephone friend C
A emails/calls C
C turns into sale
A accepts lead and B gets reward

### 3
A creates profile
B sees profile
B shares own link
C sees profile
C enters own email/telephone
C hits button to be contacted
A emails/calls C
C turns into sale
A accepts lead and B gets reward
