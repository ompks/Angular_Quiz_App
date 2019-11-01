/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing companyFacts Module.
     */
    angular
        .module("companyFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            companiesData: companiesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has
     * finished the quiz and would be used to mark the users answers against
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected
     *                          an answer yet.
     *                          - Whether the user got the question correct or
     *                              not
     *
     * The final companyData variable hold the information that will be
     * displayed in the list view when the app loads. This includes the name
     * and an image of each company as well as other information such as the
     * location and the size of the companys
     *
     */

    var correctAnswers = [0, 1, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "Who is the CEO of Google?",
            possibilities: [
                {
                    answer: "Sundar Pichai"
                },
                {
                    answer: "Elon Musk"
                },
                {
                    answer: "Bill Gates"
                },
                {
                    answer: "Tim Cook"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the industry type of Tesla?",
            possibilities: [
                {
                    answer: "Internet"
                },
                {
                    answer: "Automobile"
                },
                {
                    answer: "Space"
                },
                {
                    answer: "E-commerce"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which company is founded in year 2009?",
            possibilities: [
                {
                    answer: "Google"
                },
                {
                    answer: "Yahoo"
                },
                {
                    answer: "Facebook"
                },
                {
                    answer: "Uber"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which company CEO name is Jeff Bezos?",
            possibilities: [
                {
                    answer: "Amazon"
                },
                {
                    answer: "Alphabet"
                },
                {
                    answer: "Tesla"
                },
                {
                    answer: "Uber"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who founded Google?",
            possibilities: [
                {
                    answer: "Steve Jobs & Steve Wozniak"
                },
                {
                    answer: "Mark Zuckerberg"
                },
                {
                    answer: "Larry Page & Sergey Brin"
                },
                {
                    answer: "Bill Gates and Steve Balmer"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which is the parent company of Google?",
            possibilities: [
                {
                    answer: "Alphabet"
                },
                {
                    answer: "Youtube"
                },
                {
                    answer: "Verizon"
                },
                {
                    answer: "IBM Labs"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which one is social networking company?",
            possibilities: [
                {
                    answer: "Amazon"
                },
                {
                    answer: "Microsoft"
                },
                {
                    answer: "Uber"
                },
                {
                    answer: "Facebook"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the main source of income for Uber?",
            possibilities: [
                {
                    answer: "ads"
                },
                {
                    answer: "Transport Service"
                },
                {
                    answer: "Uber-Eats"
                },
                {
                    answer: "Socal Networking"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which company is working with NASA on Rocket science?",
            possibilities: [
                {
                    answer: "SpaceX"
                },
                {
                    answer: "Microsoft"
                },
                {
                    answer: "Amazon"
                },
                {
                    answer: "Apple"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where is the headquater of Uber?",
            possibilities: [
                {
                    answer: "Russia"
                },
                {
                    answer: "China"
                },
                {
                    answer: "Australia"
                },
                {
                    answer: "US"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var companiesData = [
        {
            name: "Google",
			ceo: "Sundar Pichai",
			founded: "4 September 1998",
			image_url: "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
			industry: "internet company",
			total_worth: "$300 billion (2018)",
			description: ""       
		},
        {
            name: "Facebook",
			ceo: "Mark Zuckerberg",
			founded: "February 2004",
			image_url: "https://securecdn.pymnts.com/wp-content/uploads/2018/02/facebookpublisher.jpg",
			industry: "Social Networking",
			total_worth: "US$97.334 billion (2018)",
			description: ""
        },
		{
            name: "SpaceX",
			ceo: "Elon Musk",
			founded: "6 May 2002",
			image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_U3ygsoLdHW7IK84mIUaY_cKBvPOoKhNHLVMRL-fslbgqC0MAsA&s",
			industry: "Space",
			total_worth: "$33.3 billion",
			description: ""
        },
		{
            name: "Amazon",
			ceo: "Jeff Bezos",
			founded: "5 July 1994",
			image_url: "https://pmcvariety.files.wordpress.com/2018/01/amazon-logo.jpg?w=1000",
			industry: "Ecommerce",
			total_worth: "$1 trillion (2019)",
			description: ""
        },
		{
            name: "Apple",
			ceo: "Tim Cook",
			founded: "April 1, 1976",
			image_url: "https://as-images.apple.com/is/og-default?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1525370171638",
			industry: "Technology company",
			total_worth: "$1 trillion (2018)",
			description: ""
        },
		{
            name: "Tesla",
			ceo: "Elon Musk",
			founded: "July 2003",
			image_url: "http://www.car-brand-names.com/wp-content/uploads/2015/05/Tesla-Motors-logo.png",
			industry: "Automotive company",
			total_worth: "$29.740 billion (2018)",
			description: ""
        },
		{
            name: "Microsoft",
			ceo: "Satya Nadella",
			founded: "April 4, 1975",
			image_url: "https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg",
			industry: "Technology company",
			total_worth: "$286.55 billion (2019)",
			description: ""
        },
		{
            name: "Uber",
			ceo: "Dara Khosrowshahi",
			founded: "March 2009",
			image_url: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022017/untitled-1_140.jpg?itok=1oBwROXU",
			industry: "Ridesharing company",
			total_worth: "$23.988 billion (2018)",
			description: ""
        },

    ];

})();