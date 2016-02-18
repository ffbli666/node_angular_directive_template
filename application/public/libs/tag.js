var tagApp = angular.module('tagApp', []);

tagApp.controller('TagListCtrl', ['$scope', function ($scope) {
    $scope.tags = [
        {name: 'tag1'},
        {name: 'tag2'},
        {name: 'tag3'}
    ];
    $scope.addTag = function(e) {
        if ($scope.tagText){
            var tag = angular.lowercase($scope.tagText)
            if ($scope.tags.map(function(e) { return e.name; }).indexOf(tag) >= 0) {
                alert("duplicated");
                return;
            }
            $scope.tags.push({name: tag});
            $scope.tagText = '';
        }
    }

    $scope.removeTag = function(tagToRemove) {
        var index = $scope.tags.indexOf(tagToRemove);
        if (index < 0) return;
        $scope.tags.splice(index, 1);
    };

    $scope.getTags = function() {
        var tags = $scope.tags.map(function(e) { return e.name; });
        $('.result').append('<li>' + tags +'</li>');
        return tags;
    };

    $scope.getTagsSerialize = function() {
        return $scope.tags.map(function(e) { return e.name; }).join(',');
    };

    $scope.input = function(e) {
        if (e.keyCode == 13) {
            $scope.addTag();
        }
    }
}])
.directive('tag', function() {
    return {
        //templateUrl : 'templates/tag.html'
        templateUrl : 'tag.html'
    };
});
