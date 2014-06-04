'use strict';

portfolioApp.controller('PortfolioController',
    function PortfolioController($scope) {
    	$scope.sortorder = 'name';
        $scope.portfolio = {
            name: 'Portfolio',
            cases: [
                {
                    name: 'Aetna Mobile App',
                    smallImageUrl: 'images/work/small/aetna_mobile.png',
                    largeImageUrl: 'images/work/small/aetna_mobile.png',
                    technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                    description: 'My role was to plan, and design the front-end based on requirements from the client. This was an agile team and effort.'
                },
                {
                    name: 'KPMG Tax Dashboard',
                    smallImageUrl: 'images/work/small/kpmg_dashboard.png',
                    largeImageUrl: 'images/work/small/aetna_mobile.png',
                    technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                    description: 'My role was to plan, and design the front-end based on requirements from the client. This was an agile team and effort.'
                },
                {
                    name: 'KPMG Mobile',
                    smallImageUrl: 'images/work/small/kpmg_mobile.png',
                    largeImageUrl: 'images/work/small/aetna_mobile.png',
                    technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                    description: 'My role was to plan, and design the front-end based on requirements from the client. This was an agile team and effort.'
                },
                {
                    name: 'KPMG Criteria Builder',
                    smallImageUrl: 'images/work/small/kpmg_criteria_builder.png',
                    largeImageUrl: 'images/work/small/aetna_mobile.png',
                    technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                    description: 'My role was to plan, and design the front-end based on requirements from the client. This was an agile team and effort.'
                },
                {
                    name: 'AdShuffle',
                    smallImageUrl: 'images/work/small/adshuffle.png',
                    largeImageUrl: 'images/work/small/aetna_mobile.png',
                    technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                    description: 'My role was to plan, and design the front-end based on requirements from the client. This was an agile team and effort.'
                },
                {
                    name: 'TrueBeginnings.com (formerly True.com)',
                    smallImageUrl: 'images/work/small/true.com.jpg',
                    largeImageUrl: 'images/work/small/aetna_mobile.png',
                    technologies: ['Sencha Touch 2.X Javascript Framework', 'HTML5', 'CSS3', 'Sass', 'Phone Gap'],
                    description: 'My role was to plan, and design the front-end based on requirements from the client. This was an agile team and effort.'
                },
            ]
        }

        // $scope.upVoteSession = function(session) {
        //     session.upVoteCount++;
        // };


        // $scope.downVoteSession = function(session) {
        //     session.upVoteCount--;
        // };
    }
);
