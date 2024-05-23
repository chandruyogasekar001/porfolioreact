export default function Contact(){
    return(
      <div style={{ height: '77vh', width: '85vw' , color:'grey'}}>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nitin Ranganath</title>
        
        <div>
          <main className="containera" >
            <div className="flx">
              <section className="social-links item">
                <h1>Reach Out Via Socials</h1>
                <h3>.Social </h3>
                <h3>{"{"}</h3>
                <p>
                  Portfolio:
                 
                </p>
                <p>
                  Email:
                  <a  target="_blank" rel="noopener noreferrer">"chandruyogasekar111@gmail.com";</a>
                 
                   
                  
                </p>
                <p>
                  Github:
                  <a  href="https://github.com/chandruyogasekar001" target="_blank" rel="noopener noreferrer">
                    "github.com/chandruyogasekar01";
                  </a>
                </p>
                <p>
                  Linkedin:
                  <a href="https://www.linkedin.com/in/chandru-yogasekar/" target="_blank" rel="noopener noreferrer">
                    "linkedin.com/chandru";
                  </a>
                </p>
                <h3>{"}"}</h3>
              </section>
            </div>
            {/* <form className="item "> */}
              <center>
                <table>
                  <caption>
                    <h1>Contact Form</h1>
                  </caption>
                  <tbody>
                    <tr>
                      <th>
                        <label htmlFor="name">Name:</label>
                      </th>
                      <td>
                        <input type="text" id="name" name="name" required />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="email">Email:</label>
                      </th>
                      <td>
                        <input type="email" id="email" name="email" required />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="subject">Subject:</label>
                      </th>
                      <td>
                        <input type="text" id="subject" name="subject" required />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="message">Message:</label>
                      </th>
                      <td style={{ paddingLeft: 10 }}>
                        <textarea
                          id="message"
                          name="message"
                          required
                          defaultValue={""}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th />
                      <td style={{ paddingLeft: 10 }}>
                        <button type="submit">SUBMIT</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            {/* </form> */}
          </main>
        </div>
      </div>
      
    );
}