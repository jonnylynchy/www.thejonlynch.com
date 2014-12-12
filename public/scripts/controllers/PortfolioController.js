'use strict';

portfolioApp.controller('PortfolioController',
    function PortfolioController($scope) {
        $scope.portfolio = {
            name: 'Portfolio',
            cases: [
                // {
                //     name: 'Aetna Mobile App',
                //     smallImageUrl: 'images/work/small/aetna_mobile.png',
                //     largeImageUrl: 'images/work/full/aetna_mobile_1.png',
                //     technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                //     description: 'The main purpose of this project was to overhaul and redesign a travel-tracking application for Aetna. My role consisted of wireframing and prototyping the inital concept as well as hi-fi mockups for clarity of look and feel and general UX. Once finalized, I transitioned to the dev side and helped implement the UI in the Sencha Touch 2.X Framework using Javascript, CSS3(Sass) for themeing and HTML5.',
                //     url:'blank'
                // },
                // {
                //     name: 'KPMG Tax Dashboard',
                //     smallImageUrl: 'images/work/small/kpmg_dashboard.png',
                //     largeImageUrl: 'images/work/full/kpmg_taxpayer_dashboard.png',
                //     technologies: ['ASP.NET MVC', 'Javascript', 'jQuery', 'Kendo UI', '', 'HTML5', 'CSS3', 'Sass'],
                //     description: "As part of a sweeping UX overhaul for KPMG Link, I planned, designed and helped implement the front-end of many of KPMG's client-facing tax applications. This particular project was a dashboard using ASP.NET MVC, Javascript, jQuery, Kendo UI, HTML5 and CSS3.",
                //     url:'blank'
                // },
                // {
                //     name: 'KPMG Mobile',
                //     smallImageUrl: 'images/work/small/kpmg_mobile.png',
                //     largeImageUrl: 'images/work/full/kpmg_mobile.png',
                //     technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                //     description: 'Federal tax users needed an application to help them approve documents and steps within a workflow. This application helps the on-the-go tax professional do just that. From wireframe concepts to full application implmentation, I lead the UX effort as well as UI implementation using the Sencha Touch 2.X Framework, HTML5 and Sass.',
                //     url:'https://play.google.com/store/apps/details?id=com.kpmg.kpmglinkmobileworkflow'
                // },
                // {
                //     name: 'KPMG Criteria Builder',
                //     smallImageUrl: 'images/work/small/kpmg_criteria_builder.png',
                //     largeImageUrl: 'images/work/full/kpmg_criteria.png',
                //     technologies: ['Orchard Framework for ASP.NET','Javascript', 'jQuery', 'HTML5', 'CSS3', 'Sass'],
                //     description: 'Global trasfer pricing professionals needed a way to create benchmarking analyses for client studies. From design including wireframing, and prototyping, to the application development process, I helped implement the front-end of this large-scale project.',
                //     url:'blank'
                // },
                {
                    name: 'AdShuffle',
                    smallImageUrl: 'images/work/small/adshuffle.png',
                    largeImageUrl: 'images/work/full/adshuffle.png',
                    technologies: ['ASP.NET C#', 'HTML', 'CSS', 'Flash', 'Flex', 'Javascript'],
                    description: 'Modern Ad-Server company "AdShuffle" delivers real-time reporting and analytics for their clients world-wide. During my time at AdShuffle (H.D. Vest), I created many sales tools including Flash demos, screen savers for advertising conferences, as well as their marketing website. My main role however, was to develop the front-end of their client-facing admin tool.',
                    url:'http://www.adshuffle.com'
                },
                {
                    name: 'TrueBeginnings.com (formerly True.com)',
                    smallImageUrl: 'images/work/small/true.com.png',
                    largeImageUrl: 'images/work/full/true.com.jpg',
                    technologies: ['ASP.NET C# and VB.NET', 'HTML', 'CSS', 'Flash', 'Javascript'],
                    description: 'True.com was a pioneer in the online dating industry being the first to bring full background checks online, and multi-user flash chat. During my time at True.com (H.D. Vest), I helped develop the front-end of their dating website including multi-user flash video chatrooms using Flash Communication Server, Javascript and Flash.',
                    url:'http://www.TrueBeginnings.com'
                }
            ]
        };

        $scope.selectedCase = $scope.portfolio.cases[0];
        $scope.sortorder = 'name';

        $scope.changeModal = function(portfolioCase) {
            $scope.selectedCase = portfolioCase;
            $("#caseModal").reveal(
                {
                    opened: function(){
                        // Just went for fixed positioning here instead
                        //console.log("modal-opened");
                        var topAdjustment = -340;
                        var modalTop = $('#caseModal').position().top;
                        $('#caseModal').css('top',modalTop + topAdjustment + 'px');
                    }
                }
            );
        };
    }
);
