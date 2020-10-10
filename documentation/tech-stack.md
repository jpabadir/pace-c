# Tech stack chosen and rationale

## Options, pros and cons

| Tech type | Tech name                                                                             | Pros                                                                                                 | Cons                                                                                               |
|-----------|---------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| FE        | React + UI libraries such as: Ant design, bootstrap, material UI, bulma, tailwind CSS | - Client first choice - Widely supported and documented - Facebook-backed                            | - A bit harder to learn than Vue                                                                   |
| FE        | Vue                                                                                   | - JP has experience - Easy learning curve                                                            | - Not as much support and documentation - No major company backing                                 |
| FE        | Angular                                                                               | - Most mature of all three frameworks                                                                | - Steep learning curve                                                                             |
| BE        | Node with Express.JS                                                                  | - Client first choice - Uses JS, like the front-end - JP has experience - V8 engine (very fast)      | - Callback syntax can become complex  - Slower than Python if trying to do heavy computation tasks |
| BE        | Python with one of Django, Flask, Nameko                                              | - Python syntax (subjective advantage)                                                               | - Doesn't natively support asynchronous development - Slower than node                             |
| DB        | Firebase                                                                              | - Client first choice - JP has experience - Easy to learn and use - Large community                  | - Expensive when scaling                                                                           |
| DB        | AWS                                                                                   | - Large suite of tools (authentication, data processing) - More capable & customizable than Firebase | - Steeper learning curve - Harder to set up                                                        |
| DB        | MongoDB                                                                               | - Harder to set up than AWS                                                                          | - More predictable pricing                                                                         |


## Final choice
### The final tech choice will be the following: 
- Front-end: React + UI libraries
- Back end: NodeJS
- Database and authentication: Firebase

### Rationale:  
Our client told us that the tech stack we use is, eventually, up to us. However, the client did seem to have a preference for the tech stack above. This is a big reason why we opted for this final choice. In addition, the table above shows some of the significant avantages that our chosen tech stack presents. 

In addition to React, we will be using vraious front-end libraries, such as: Ant design, bootstrap, material UI, bulma, or tailwind CSS. Again, this is a suggestion from our client. Using such front-end libraries has a few drawbacks. First, it will add a bit of complexity to our setup, and dependencies on external codebases, which means we are vulnerable to the future potential lack of maintenance or breaking changes of libraries. However, using such libraries will help us craft a professional and good-looking front-end, with code that is less error-prone than ours, since it is "tried-and-tested" by many developers. In addition, we believe that using well-supported libraries with large communities of developers relying on them (such as Bootstrap or Ant design) will mitigate the issue of being dependent on other developers to maintain the libraries. 