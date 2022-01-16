var apis = {
    groupRecs : function(req, res){
        var data = req.body.recs;
        var size = req.body.size;

        vectors = [];
        for (i = 0; i < data.length; i++){
            vectors[i] = [ data[i].longitude_to, data[i].latitude_to];
        }

        kmeans = require('node-kmeans');
        kmeans.clusterize(vectors, {k: size}, (err,result) => {
            if(err)
                return res.status(400).json({'status': 'Error'});
            else {
                var json = result;
                return res.status(200).json(json);
            }
        });
    },
};

module.exports = apis;