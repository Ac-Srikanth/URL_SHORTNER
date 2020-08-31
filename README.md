# URL_SHORTNER
A Backend Application built using Node.js, Express and MongoDB that will give you an shorter version of an URL that is passed  
## API 
BaseUrl is for now your localhost
<table>
<thead>
    <th>
        <tr>
            <td>#</td>
            <td>Action</td>
            <td>Method</td>
            <td>Request</td>
            <td>URL</td>
            <td>Response</td>
        </tr>
    </th>
</thead>
<tbody>
    <tr>
        <td>1</td>
        <td>List All Urls</td>
        <td>GET</td>
        <td> - </td>
        <td>'/urls'</td>
        <td>
            <ul>
                <li>ID</li>
                <li>Title</li>
                <li>Original Url</li>
                <li>Hashed Url</li>
                <li>Clicks
                    <ul>
                        <li>id</li>
                        <li>DateTime</li>
                        <li>Browser</li>
                        <li>Platform</li>
                        <li>Device</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>2</td>
        <td>Create A Url</td>
        <td>POST</td>
        <td>
            <ul>
                <li>title</li>
                <li>originalUrl</li>
            </ul>
        </td>
        <td>'/urls'</td>
        <td>
            <ul>
                <li>_id</li>
                <li>title</li>
                <li>originalUrl</li>
                <li>hashedUrl</li>
                <li>Clicks</li>
            </ul>
        </td>        
    </tr>
    <tr>
        <td>3</td>
        <td>Get A Url</td>
        <td>GET</td>
        <td> - </td>
        <td> '/urls/:id'</td>
        <td>
            <ul>
                <li>ID</li>
                <li>title</li>
                <li>original Url</li>
                <li>hashedUrl</li>
                <li>Clicks</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>4</td>
        <td>Delete a URL</td>
        <td>DELETE</td>
        <td> - </td>
        <td> '/urls/:id'</td>
        <td>
              <ul>
                <li>ID</li>
                <li>title</li>
                <li>original Url</li>
                <li>hashedUrl</li>
                <li>Clicks</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>5</td>
        <td>Update a URL</td>
        <td>PUT</td>
        <td>
            <ul>
                <li>title</li>
                <li>OriginalURL</li>
            </ul>
        </td>
        <td>'/urls/:id'</td>
        <td>
            <ul>
                <li>ID</li>
                <li>title</li>
                <li>original Url</li>
                <li>hashedUrl</li>
                <li>Clicks</li>
            </ul>
        </td>    
    </tr>
    <tr>
        <td>6</td>
        <td>Redirect to original Url</td>
        <td>GET</td>
        <td> - </td>
        <td>'/urls/:hashedUrl'</td>
        <td> Redirect to original Url</td>
    </tr>
</tbody>
</table>