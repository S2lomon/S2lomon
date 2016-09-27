    var loadComments = function (issueId, data) {
        var commentsElement = jQuery("#comments");
        commentsElement.empty();
        for (var i=0; i<data.length; i++) {
            var cuser = data[i].user.login;
            var cuserlink = "https://www.github.com/" + data[i].user.login;
            var clink = "https://github.com/s2lomon/s2lomon/issues/"+issueId+"#issuecomment-" + data[i].url.substring(data[i].url.lastIndexOf("/")+1);
            var cbody = data[i].body_html;
            var cavatarlink = data[i].user.avatar_url;
            var creation_date = data[i].created_at;
            var cdate = creation_date
                .replace('T', ' ')
                .replace('Z', ' ');

            commentsElement.append(
            "<div class='comment'>"+
                "<div class='comment-header'>" +
                    '<img src="' + cavatarlink + '" alt="avatar">'+
                    "<a class='comment-user' href=\""+ cuserlink + "\">" + cuser + "</a>"+
                    "<a class='comment-date' href=\"" + clink + "\">" + cdate + "</a>"+
                "</div>"+
                "<div class='comment-body'>" + cbody + "</div>"+
            "</div>"
            );
        }
    };

    var requestsComments = function(issueId, successHandler, errorHandler) {
               var commentsReq = jQuery.ajax("https://api.github.com/repos/s2lomon/s2lomon/issues/"+issueId+"/comments?per_page=100", {
                    headers: {Accept: "application/vnd.github.full+json"},
                    dataType: "json",
                    crossDomain: true
                })
                commentsReq.done(data => successHandler(issueId, data));
                commentsReq.fail((first, second) => errorHandler(first, second));
    };

    var logError = function(a,b) {
        console.log("problem with fetching issues lists "+a.toString() + b.toString())
    }

    var handleComments = function (issueId) {
        requestsComments(issueId, loadComments, logError);
    };

    var prepareCommentsToogle = function(toggleTrigger, toggleTarget) {
        jQuery(toggleTrigger).on("click", () => {
            toggleContent(toggleTarget);
        })
    }

    var prepareCommentsRefresh = function(refreshTrigger, issueId) {
        jQuery(refreshTrigger).on('click', () => handleComments(issueId));
    }

    var COMMENTS_TOGGLE_ANIMATION_TIME = 200;
    var toggleContent = function (target) {
        var target = jQuery(target);
        target.toggleClass('no-height', COMMENTS_TOGGLE_ANIMATION_TIME );
    }




