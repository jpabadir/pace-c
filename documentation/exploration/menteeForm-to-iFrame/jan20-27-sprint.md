# Exploration of Rendering the Mentee Form to an iFrame Tag

## Jan 20-27's Sprint

### Findings/Attempted Methodology

When Researching how to Create an iFrame from a React Component:

1. I came across the [react-frame-component library](https://github.com/ryanseddon/react-frame-component). To implement, I simply installed the library and wrapped everything that the component should return when rendered in a <Frame> tag. Upon testing, this resulted in the styling of the form being removed, which is definitely not what we want. The screenshot below displays the result of this.
   ![](react-frame-component-library.png)

2. My next train of thought was to then see if I could merely use the <iframe> tag. To test this, I put the iFrame tag within the ‘MentorTutorial’ component. I wanted to see what importing the MenteeForm component and using that within the src or srcDoc property would do. In both cases, the result was an empty iFrame display. The code that I used to test this was as follows:

```
<iframe
            srcDoc={MenteeForm}
            height="500"
            width="1100"
            title="testIframe"
          />
```

![](iFrame-MenteeForm-component.png)

3. I then attempted something similar, but I tried to access the component through our file structure rather than importing the component. This, however, rendered our entire application within the frame window.

```
        <iframe
            src="../MenteeForm/MenteeForm.js" //changing 'src="MenteeForm"' produces the same result
            height="500"
            width="1100"
            title="testIframe"
          />
```

- As an aside: Yes, if you navigate to the 'MentorTutorial' component within the embedded iFrame, what I would deem as 'Menteeform-ception' occurs (or, I guess since the suffix '-ception' doesn't technically mean 'something nested within itself', I should really just say that recursion is the result).
  ![](menteeform-ception.png)

4. It then dawned on me that iFrame tags typically seem to use URLS, and since our form would be embedded within external sites, we'd likely definitely want to use the URL that's hosting the form. So, within the tag’s src property, I tried to use the URL to access the Mentee component. The result of this, unfortunately was the same as the screenshot above, except it defaulted the display to be on the Mentee Form, rather than on the Login page.

```
        <iframe
            src="http://localhost:3000/MenteeForm"
            height="500"
            width="1100"
            title="testIframe"
          />
```

![](iFrame-src-MenteeForm-URL.png)

5. Since external sites need to be able to access the form, testing internally seems to be difficult. Initially, I was looking into following something similar to what's outlined [here](https://dev.to/damcosset/iframes-and-communicating-between-applications-31k5). Although the source I linked is aiming for different functionality, I came across it when thinking that we'd need to split the MenteeForm from our current app. Closer to development, we'll remove the 'MenteeForm' and 'MentorForm' tabs, and the 'Login' component will be stand-alone. Admin accounts will essentially host the MentorForm (that potential Mentor users can access through email invite), while the MenteeForms will be available to public sites who embed them. Originally, I thought we might need to develop a separate React App to host the Mentee form (just copying over the MenteeForm files to a new react app). Then, we could test rendering that into the current MenteeForm tab in an iFrame tag.

However, that initial thought doesn't make much sense, especially in terms of longevity. Essentially, the root of my thoughts boiled down to: 'How do we host the MenteeForm separate from our current application?'. Albeit, this exploration stems down to gaps in my own knowledge.

After continuing to give this some thought, I wanted to look further into what Firebase offers. I turned to Google, querying 'render stored html page from firebase' in hopes that something would be a match. That's when I came across [this](https://firebase.google.com/docs/hosting/serverless-overview). My experience with Firebase is pretty much nonexistent, but from what I can tell, I think that since our MenteeForm is a single page we could use Firebase Hosting to host the form, along with Cloud Functions to request the page. This would hopefully be accessed through a hardcoded URL that the iFrame tag would access through a GET request.

To restate as a disclaimer: I really don't have a solid understanding of Cloud Functions, but at a high-level consideration, I think that Firebase Hosting and Cloud Functions is the way to go.
