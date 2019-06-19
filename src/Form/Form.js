import React, { Component } from 'react';

export default class Form extends Component{
    //form will have to make the api call.
    constructor(props) {
        super(props);
        this.state = {
          q: "darkness",
          printType: "all",
          filter: "partial",
          key : "AIzaSyBGyK0_vdsUQT3bhdKCCmDKakXFoIXBs0I"
        };
      }
    
      qChanged(q) {
        this.setState({
          q
        });
      }
    
      printType(printType) {
        this.setState({
          printType
        });
      }
    
      filterChanged(filter) {
        this.setState({
          filter
        });
      }
    


    handleSubmit(e) {
        e.preventDefault();
        const search = (({q, printType, filter, key}) => ({q, printType, filter, key}))(this.state);
        // const books_init =[];
        // const options = {
        //   method: 'GET',
        //   body: JSON.stringify(books_init),
        //   headers: {
        //     "Content-Type": "application/json",
        //   }
        // };

        const queryItems = Object.keys(search)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(search[key])}`)
        
        queryItems.join('&');
              
        const url ='https://www.googleapis.com/books/v1/volumes?q='+search.q+'&printType='+search.printType+'&filter='+search.filter+'&key='+search.key;
        console.log(url);
        // console.log(search);

        fetch(url)
        .then(response => {
          if(!response.ok) {
            console.log('fail');
            throw new Error('Something went wrong, please try again later');
          }
          // console.log('Success:', JSON.stringify(response));
          return response;
          // return response.json().items;
        })
        .then(response => response.json())
        // .then(responseJson => console.log("inside fetch:"+responseJson))
        // // .then(responseJson => console.log("props: "+this.state))
        .then(response => this.props.handleSearch(response))
    //     .catch(err => {
    //         this.setState({
    //           error: err.message
    //         });
    //       });
    //   }

    let r=[
        {
         "kind": "books#volume",
         "id": "IqLpHDdCDF0C",
         "etag": "oD+bJgwc2co",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/IqLpHDdCDF0C",
         "volumeInfo": {
          "title": "In Darkness",
          "authors": [
           "Nick Lake"
          ],
          "publisher": "A&C Black",
          "publishedDate": "2012-01-05",
          "description": "A fearless novel that grips the heart and the imagination.",
          "industryIdentifiers": [
           {
            "type": "ISBN_13",
            "identifier": "9781408824184"
           },
           {
            "type": "ISBN_10",
            "identifier": "1408824183"
           }
          ],
          "readingModes": {
           "text": true,
           "image": true
          },
          "pageCount": 352,
          "printType": "BOOK",
          "categories": [
           "Fiction"
          ],
          "averageRating": 3.5,
          "ratingsCount": 23,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=IqLpHDdCDF0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=IqLpHDdCDF0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=IqLpHDdCDF0C&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=IqLpHDdCDF0C&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/In_Darkness.html?hl=&id=IqLpHDdCDF0C"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
           "isAvailable": true,
           "acsTokenLink": "http://books.google.com/books/download/In_Darkness-sample-epub.acsm?id=IqLpHDdCDF0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
           "isAvailable": true,
           "acsTokenLink": "http://books.google.com/books/download/In_Darkness-sample-pdf.acsm?id=IqLpHDdCDF0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=IqLpHDdCDF0C&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "In darkness I count my blessings like Manman taught me."
         }
        },
        {
         "kind": "books#volume",
         "id": "JBCqNY9UGYgC",
         "etag": "SqhkJWrRgsc",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/JBCqNY9UGYgC",
         "volumeInfo": {
          "title": "An Echo in the Darkness",
          "authors": [
           "Francine Rivers"
          ],
          "publisher": "Tyndale House Publishers, Inc.",
          "publishedDate": "2011-12-09",
          "description": "This classic series has inspired nearly 2 million readers. Both loyal fans and new readers will want the latest edition of this beloved series. This edition includes a foreword from the publisher, a preface from Francine Rivers and discussion questions suitable for personal and group use. #2 An Echo in the Darkness: Turning away from the opulence of Rome, Marcus is led by a whispering voice from the past into a journey that could set him free from the darkness of his soul.",
          "industryIdentifiers": [
           {
            "type": "ISBN_10",
            "identifier": "1414340907"
           },
           {
            "type": "ISBN_13",
            "identifier": "9781414340906"
           }
          ],
          "readingModes": {
           "text": true,
           "image": false
          },
          "pageCount": 480,
          "printType": "BOOK",
          "categories": [
           "Fiction"
          ],
          "averageRating": 4.5,
          "ratingsCount": 29,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "0.6.5.0.preview.2",
          "panelizationSummary": {
           "containsEpubBubbles": false,
           "containsImageBubbles": false
          },
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=JBCqNY9UGYgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=JBCqNY9UGYgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=JBCqNY9UGYgC&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=2&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=JBCqNY9UGYgC&source=gbs_api",
          "canonicalVolumeLink": "https://market.android.com/details?id=book-JBCqNY9UGYgC"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
           "amount": 16.99,
           "currencyCode": "USD"
          },
          "retailPrice": {
           "amount": 10.99,
           "currencyCode": "USD"
          },
          "buyLink": "https://play.google.com/store/books/details?id=JBCqNY9UGYgC&rdid=book-JBCqNY9UGYgC&rdot=1&source=gbs_api",
          "offers": [
           {
            "finskyOfferType": 1,
            "listPrice": {
             "amountInMicros": 1.699E7,
             "currencyCode": "USD"
            },
            "retailPrice": {
             "amountInMicros": 1.099E7,
             "currencyCode": "USD"
            },
            "giftable": true
           }
          ]
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
           "isAvailable": true,
           "acsTokenLink": "http://books.google.com/books/download/An_Echo_in_the_Darkness-sample-epub.acsm?id=JBCqNY9UGYgC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
           "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=JBCqNY9UGYgC&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "This classic series has inspired nearly 2 million readers. Both loyal fans and new readers will want the latest edition of this beloved series."
         }
        },
        {
         "kind": "books#volume",
         "id": "JgldIwWfVwgC",
         "etag": "Kc3lPIttxBc",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/JgldIwWfVwgC",
         "volumeInfo": {
          "title": "Somewhere in the Darkness",
          "authors": [
           "Walter Dean Myers"
          ],
          "publisher": "Scholastic Inc.",
          "publishedDate": "1992",
          "description": "Jimmy hasn't seen his father in nine years. But one day he comes back -- on the run from the law. Together, the two of them travel across the country -- where Jimmy's dad will find the man who can exonerate him of the crime for which he was convicted. Along the way, Jimmy discovers a lot about his father and himself -- and that while things can't always be fixed, sometimes they can be understood and forgiven.",
          "industryIdentifiers": [
           {
            "type": "ISBN_10",
            "identifier": "0590341863"
           },
           {
            "type": "ISBN_13",
            "identifier": "9780590341868"
           }
          ],
          "readingModes": {
           "text": false,
           "image": true
          },
          "pageCount": 168,
          "printType": "BOOK",
          "categories": [
           "African Americans"
          ],
          "averageRating": 3.0,
          "ratingsCount": 6,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.3.0.preview.1",
          "panelizationSummary": {
           "containsEpubBubbles": false,
           "containsImageBubbles": false
          },
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=JgldIwWfVwgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=JgldIwWfVwgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=JgldIwWfVwgC&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=3&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=JgldIwWfVwgC&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Somewhere_in_the_Darkness.html?hl=&id=JgldIwWfVwgC"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
           "isAvailable": false
          },
          "pdf": {
           "isAvailable": true,
           "acsTokenLink": "http://books.google.com/books/download/Somewhere_in_the_Darkness-sample-pdf.acsm?id=JgldIwWfVwgC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=JgldIwWfVwgC&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "Jimmy hasn&#39;t seen his father in nine years."
         }
        },
        {
         "kind": "books#volume",
         "id": "ED9UiE7OtkoC",
         "etag": "JRvG4BQWiYM",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/ED9UiE7OtkoC",
         "volumeInfo": {
          "title": "Victory Over the Darkness (Large Print 16pt)",
          "authors": [
           "Neil T. Anderson"
          ],
          "publisher": "ReadHowYouWant.com",
          "publishedDate": "2010-10",
          "description": "Realizing the Power of Your Identity in Christ Ten years ago, a breakthrough book launched a ministry that has helped more than one million people overcome this world and win the battle for their hearts and minds. Now Neil Anderson has revised and expanded Victory Over the Darkness for a new generation of readers, outlining practical and more productive paths to Christian growth based on Christ's promise; You will know the truth, and the truth will make you free. Victory Over the Darkness emphasizes the importance of believing and internalizing the cardinal truths of Scripture as a base from which to renew the mind and fend off Satan's relentless attempt to convince us that we are less than Christ empowers us to be.",
          "industryIdentifiers": [
           {
            "type": "ISBN_13",
            "identifier": "9781459606609"
           },
           {
            "type": "ISBN_10",
            "identifier": "1459606604"
           }
          ],
          "readingModes": {
           "text": false,
           "image": true
          },
          "pageCount": 368,
          "printType": "BOOK",
          "categories": [
           "Religion"
          ],
          "averageRating": 4.5,
          "ratingsCount": 46,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.1.0.preview.1",
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=ED9UiE7OtkoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=ED9UiE7OtkoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=ED9UiE7OtkoC&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=ED9UiE7OtkoC&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Victory_Over_the_Darkness_Large_Print_16.html?hl=&id=ED9UiE7OtkoC"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
           "isAvailable": false
          },
          "pdf": {
           "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=ED9UiE7OtkoC&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "Victory Over the Darkness emphasizes the importance of believing and internalizing the cardinal truths of Scripture as a base from which to renew the mind and fend off Satan&#39;s relentless attempt to convince us that we are less than Christ ..."
         }
        },
        {
         "kind": "books#volume",
         "id": "z3_bwZ-iM7YC",
         "etag": "1T218YzhEL4",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/z3_bwZ-iM7YC",
         "volumeInfo": {
          "title": "The Darkness",
          "authors": [
           "Anthony Eaton"
          ],
          "publisher": "Univ. of Queensland Press",
          "publishedDate": "2000",
          "description": "In the small coastal town of Isolation Bay, a shadow hangs over the lives of Rohan Peters and his mother Eileen. Bound together by small town superstition, their lives are dominated by fear. Into this setting comes Rachel, a girl on the run from her own dark history. As Rohan and Rachel struggle to build a friendship amidst the paranoia of Isolation Bay, their pasts come crashing down on them in an event that will change both of their lives forever.",
          "industryIdentifiers": [
           {
            "type": "ISBN_10",
            "identifier": "0702231525"
           },
           {
            "type": "ISBN_13",
            "identifier": "9780702231520"
           }
          ],
          "readingModes": {
           "text": false,
           "image": true
          },
          "pageCount": 170,
          "printType": "BOOK",
          "categories": [
           "Fiction"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.1.0.preview.1",
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=z3_bwZ-iM7YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=z3_bwZ-iM7YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=z3_bwZ-iM7YC&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=z3_bwZ-iM7YC&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Darkness.html?hl=&id=z3_bwZ-iM7YC"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
           "isAvailable": false
          },
          "pdf": {
           "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=z3_bwZ-iM7YC&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "In the small coastal town of Isolation Bay, a shadow hangs over the lives of Rohan Peters and his mother Eileen."
         }
        },
        {
         "kind": "books#volume",
         "id": "bZT57A8ioCkC",
         "etag": "gOyZdXxQmM8",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/bZT57A8ioCkC",
         "volumeInfo": {
          "title": "The Treasures of Darkness",
          "subtitle": "A History of Mesopotamian Religion",
          "authors": [
           "Thorkild Jacobsen"
          ],
          "publisher": "Yale University Press",
          "publishedDate": "1978-01-01",
          "description": "\" ... No one can plausibly deny that the religious development of the peoples of Canaan (and indeed of all the ancient world around the eastern Mediterranean to the Indus river) were affected by the cultural and religious developments in Mesopotamia, the centre of the region, and a fertile region second to none known in the world, on a par with the Nile, around which another major civilization arose. This is a text of history of Mesopotamia in its own right. By the time history gets back this far, the lines become very blurred, rather like parallel lines intersecting on the horizon. Literature, religion, archaeology, sociology, psychology -- all of these disciplines become intertwined in Jacobsen's text as he looks at Sumerian society. The book is organized with an introduction, then according to time divisions of fourth, third, and second millennia, then concludes with an epilogue into the first millennium, during which the Bible as we know it (and most ancient history such as is commonly known occurred) came to be\"--Amazon.com.",
          "industryIdentifiers": [
           {
            "type": "ISBN_10",
            "identifier": "0300022913"
           },
           {
            "type": "ISBN_13",
            "identifier": "9780300022919"
           }
          ],
          "readingModes": {
           "text": true,
           "image": true
          },
          "pageCount": 273,
          "printType": "BOOK",
          "categories": [
           "Social Science"
          ],
          "averageRating": 4.5,
          "ratingsCount": 3,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.2.0.preview.3",
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=bZT57A8ioCkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=bZT57A8ioCkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=bZT57A8ioCkC&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=6&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=bZT57A8ioCkC&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Treasures_of_Darkness.html?hl=&id=bZT57A8ioCkC"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
           "isAvailable": true,
           "acsTokenLink": "http://books.google.com/books/download/The_Treasures_of_Darkness-sample-epub.acsm?id=bZT57A8ioCkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
           "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=bZT57A8ioCkC&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "This is a text of history of Mesopotamia in its own right. By the time history gets back this far, the lines become very blurred, rather like parallel lines intersecting on the horizon."
         }
        },
        {
         "kind": "books#volume",
         "id": "2c_lltYHOywC",
         "etag": "+uSAuTnNsEM",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/2c_lltYHOywC",
         "volumeInfo": {
          "title": "Heart of Darkness",
          "authors": [
           "Joseph Conrad"
          ],
          "publisher": "Courier Corporation",
          "publishedDate": "1990",
          "description": "Dark allegory describes the narrator's journey up the Congo River and his meeting with, and fascination by, Mr. Kurtz, a mysterious personage who dominates the unruly inhabitants of the region. Masterly blend of adventure, character development, psychological penetration. Considered by many Conrad's finest, most enigmatic story.",
          "industryIdentifiers": [
           {
            "type": "ISBN_10",
            "identifier": "0486264645"
           },
           {
            "type": "ISBN_13",
            "identifier": "9780486264646"
           }
          ],
          "readingModes": {
           "text": true,
           "image": true
          },
          "pageCount": 72,
          "printType": "BOOK",
          "categories": [
           "Fiction"
          ],
          "averageRating": 3.5,
          "ratingsCount": 19,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": true,
          "contentVersion": "0.1.3.0.preview.3",
          "panelizationSummary": {
           "containsEpubBubbles": false,
           "containsImageBubbles": false
          },
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=2c_lltYHOywC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=2c_lltYHOywC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=2c_lltYHOywC&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=7&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=2c_lltYHOywC&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Heart_of_Darkness.html?hl=&id=2c_lltYHOywC"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
           "isAvailable": true,
           "acsTokenLink": "http://books.google.com/books/download/Heart_of_Darkness-sample-epub.acsm?id=2c_lltYHOywC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "pdf": {
           "isAvailable": true,
           "acsTokenLink": "http://books.google.com/books/download/Heart_of_Darkness-sample-pdf.acsm?id=2c_lltYHOywC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=2c_lltYHOywC&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "Considered by many Conrad&#39;s finest, most enigmatic story. In Conrad&#39;s haunting tale, Marlow, a seaman and wanderer, recounts his physical and psychological journey in search of the enigmatic Kurtz."
         }
        },
        {
         "kind": "books#volume",
         "id": "G2vJBAAAQBAJ",
         "etag": "D9KVS/foVYg",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/G2vJBAAAQBAJ",
         "volumeInfo": {
          "title": "Heart of Darkness",
          "authors": [
           "Joseph Conrad"
          ],
          "publisher": "Lulu.com",
          "publishedDate": "2013-02-01",
          "description": "This is a fine edition of Jospeh Conrad's most acclaimed novel, printed on cream, acid-free paper. As the narrator Marlow journeys ever deeper into the Congo's 'heart of darkness', so he also penetrates deeper into the folly of western corruption and absurdity that characterises both the collision of European and African cultures, and the conflicts in his own inner nature. The story that tells of Marlow's mission to find the mysterious but missing Mr Kurtz, as he travels along the Congo River into the interior of the 'dark continent', tells also a second dark story of what happens when white westerners intrude into, and try to dominate, the continent of Africa without understanding either its people or their culture; but at its most penetrating level, Conrad's story reveals that the 'heart of darkness' lies at the core of human nature itself, that the journey to find Kurtz, is Marlow's journey to his own darkness that, viewed at its most bleak is the darkness that we all share.",
          "industryIdentifiers": [
           {
            "type": "ISBN_13",
            "identifier": "9781471005589"
           },
           {
            "type": "ISBN_10",
            "identifier": "1471005585"
           }
          ],
          "readingModes": {
           "text": false,
           "image": true
          },
          "pageCount": 144,
          "printType": "BOOK",
          "categories": [
           "Fiction"
          ],
          "averageRating": 3.5,
          "ratingsCount": 142,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=G2vJBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=G2vJBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=G2vJBAAAQBAJ&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=8&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=G2vJBAAAQBAJ&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Heart_of_Darkness.html?hl=&id=G2vJBAAAQBAJ"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
           "isAvailable": false
          },
          "pdf": {
           "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=G2vJBAAAQBAJ&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "This is a fine edition of Jospeh Conrad&#39;s most acclaimed novel, printed on cream, acid-free paper."
         }
        },
        {
         "kind": "books#volume",
         "id": "6PNfGgW2UuoC",
         "etag": "bVaAfiO3/Mw",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/6PNfGgW2UuoC",
         "volumeInfo": {
          "title": "Beyond the Darkness",
          "authors": [
           "Alexandra Ivy"
          ],
          "publisher": "Zebra Books",
          "publishedDate": "2010",
          "description": "Salvatore Giuliani finds the pureblood werewolf female he needs to save his people from extinction in Harley, but she refuses to become his mate until she discovers that he is her key to saving the family she never knew she had.",
          "industryIdentifiers": [
           {
            "type": "ISBN_13",
            "identifier": "9781420102987"
           },
           {
            "type": "ISBN_10",
            "identifier": "1420102982"
           }
          ],
          "readingModes": {
           "text": false,
           "image": true
          },
          "pageCount": 379,
          "printType": "BOOK",
          "categories": [
           "Fiction"
          ],
          "averageRating": 4.5,
          "ratingsCount": 4,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=6PNfGgW2UuoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=6PNfGgW2UuoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=6PNfGgW2UuoC&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=9&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=6PNfGgW2UuoC&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Beyond_the_Darkness.html?hl=&id=6PNfGgW2UuoC"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
           "isAvailable": false
          },
          "pdf": {
           "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=6PNfGgW2UuoC&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "Salvatore Giuliani finds the pureblood werewolf female he needs to save his people from extinction in Harley, but she refuses to become his mate until she discovers that he is her key to saving the family she never knew she had."
         }
        },
        {
         "kind": "books#volume",
         "id": "RVthmSz6k30C",
         "etag": "QnUTwO9vNc0",
         "selfLink": "https://www.googleapis.com/books/v1/volumes/RVthmSz6k30C",
         "volumeInfo": {
          "title": "The Darkness of God",
          "subtitle": "Negativity in Christian Mysticism",
          "authors": [
           "Denys Turner"
          ],
          "publisher": "Cambridge University Press",
          "publishedDate": "1998-11-05",
          "description": "A closely argued book about what the negative tradition in Western theology involves.",
          "industryIdentifiers": [
           {
            "type": "ISBN_10",
            "identifier": "0521645611"
           },
           {
            "type": "ISBN_13",
            "identifier": "9780521645614"
           }
          ],
          "readingModes": {
           "text": false,
           "image": true
          },
          "pageCount": 278,
          "printType": "BOOK",
          "categories": [
           "Religion"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.0.1.0.preview.1",
          "panelizationSummary": {
           "containsEpubBubbles": false,
           "containsImageBubbles": false
          },
          "imageLinks": {
           "smallThumbnail": "http://books.google.com/books/content?id=RVthmSz6k30C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
           "thumbnail": "http://books.google.com/books/content?id=RVthmSz6k30C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=RVthmSz6k30C&printsec=frontcover&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&cd=10&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=RVthmSz6k30C&dq=darkness&hl=&as_brr=3&as_pt=ALLTYPES&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Darkness_of_God.html?hl=&id=RVthmSz6k30C"
         },
         "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
         },
         "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
           "isAvailable": false
          },
          "pdf": {
           "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=RVthmSz6k30C&hl=&as_brr=3&as_pt=ALLTYPES&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
         },
         "searchInfo": {
          "textSnippet": "A closely argued book about what the negative tradition in Western theology involves."
         }
        }
       ];
    
    this.props.handleSearch(r);
       // this.props.handleSearch(r);

    // fetch(url)
    // .then(response => {
    //   if (response.ok) {
    //     // console.log(response.json().items);
    //     // this.props.handleSearch(response.json().items);
    //     return response.json();
    //   }
    //   throw new Error(response.statusText);
    // })
    // .then(response => {
    //     if (response.ok) {
    //       // console.log(response.json().items);
    //       this.props.handleSearch(response.json().items);
    //     }
    //     throw new Error(response.statusText);
    //   })
    // .then(r=response.json().items)
    // .catch(err => {
    //   console.log('error');
    // });

    }


    
    render(){
        console.log(this.state);
        console.log('props'+this.props);
        return(
            <form onSubmit={e => this.handleSubmit(e)}>
            <fieldset>
                <div>
                Search:<input placeholder='Book Title'></input>
                <button type="submit" >Search</button>
                </div>
                <div>
                    Print Type:<select>
                    <option>all</option>
                    <option>books</option>
                    <option>magazines</option>
                    </select>
                    Book Type:<select>
                    <option>partial</option>
                    <option>free-ebooks</option>
                    <option>full</option>
                    <option>paid-ebooks</option>
                    <option>ebooks</option>
                    </select>
                </div>

            </fieldset>
            </form>
        )
    }
}