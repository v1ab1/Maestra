import style from './Header.module.sass';

function Header() {
    return (
      <div className={style.Header}>
        <div class="heading">
            <div>
                <svg class="mobile-logo" width="139" height="121" viewBox="0 0 139 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_133_129)">
                    <path d="M91.5887 6.02186H47.3551C44.7117 6.02186 42.5464 3.85512 42.5464 1.21C42.5464 0.534651 43.0807 0 43.7556 0H95.1882C95.8631 0 96.3973 0.534651 96.3973 1.21C96.3692 3.85512 94.2321 6.02186 91.5887 6.02186ZM44.065 1.51953C44.2337 3.17977 45.6397 4.50233 47.3269 4.50233H91.5606C93.276 4.50233 94.682 3.17977 94.8226 1.51953H44.065Z" fill="#DCAA72"/>
                    <path d="M59.0251 38.5514V36.9755C59.0251 35.3716 59.0251 26.9016 59.0251 25.2976C59.0251 20.8234 57.141 17.7844 53.2604 15.9553C52.2761 15.4769 51.067 15.28 49.8859 15.083L49.5484 15.0267C48.4517 14.8297 47.9737 14.2669 47.9737 13.1976C47.9737 12.3534 47.9737 11.5093 47.9737 10.6651C47.9737 10.3274 48.0018 9.79274 48.3674 9.42693C48.7329 9.06111 49.2391 9.00483 49.6047 9.00483H66.224C66.5614 8.97669 67.1238 9.03297 67.4894 9.39879C67.8831 9.7646 67.9393 10.2993 67.9112 10.7495V38.4951L66.5333 37.3695C65.6334 36.7223 64.6211 36.4127 63.5525 36.4127C62.2589 36.4127 61.106 36.8067 60.1499 37.5665L59.0251 38.5514ZM49.5484 13.479C49.5766 13.479 49.6609 13.5072 49.8296 13.5353L50.1671 13.5916C51.4325 13.7886 52.7261 14.0137 53.9353 14.5765C58.3502 16.6588 60.5717 20.2606 60.5717 25.2976C60.5717 26.6202 60.5717 32.642 60.5717 35.5967C61.4997 35.1183 62.5402 34.8932 63.665 34.8932C64.6492 34.8932 65.6053 35.1183 66.5052 35.5404V10.7213C66.5052 10.6088 66.5052 10.5525 66.5052 10.4962C66.477 10.4962 66.4208 10.4962 66.3364 10.4962H49.689C49.6328 10.4962 49.6047 10.4962 49.5484 10.4962C49.5484 10.5244 49.5484 10.5806 49.5484 10.6369C49.5484 11.4811 49.5484 12.3253 49.5484 13.1695C49.5203 13.3383 49.5203 13.4227 49.5484 13.479Z" fill="#DCAA72"/>
                    <path d="M67.9955 71.1367L60.0655 65.4807C59.3344 64.946 58.9969 64.2707 58.9969 63.2858C58.9969 57.9956 58.9969 55.5193 58.9969 52.3395V45.1358C59.1376 43.4193 59.5312 42.1249 60.178 41.14C61.0497 39.8456 62.2589 39.1702 63.7212 39.1702C65.1272 39.1702 66.3364 39.8737 67.2363 41.1963C67.8268 42.0686 67.9393 43.0816 67.9674 43.9539L67.9955 71.1367ZM63.7493 40.6898C62.7932 40.6898 62.0621 41.1119 61.4434 41.9842C60.9373 42.7439 60.6279 43.8133 60.5155 45.1921V52.3395C60.5155 55.5193 60.5155 57.9956 60.5155 63.2858C60.5155 63.7642 60.6279 64.0174 60.9654 64.2426L66.5051 68.1821V43.9821C66.477 43.0816 66.3364 42.4907 66.0271 42.0686C65.3803 41.14 64.6492 40.6898 63.7493 40.6898Z" fill="#DCAA72"/>
                    <path d="M71.0044 71.0805V43.6726C71.0325 42.9128 71.145 41.9842 71.7074 41.1681C72.6073 39.8456 73.8165 39.1421 75.2225 39.1421C76.6848 39.1421 77.8939 39.8174 78.7657 41.1119C79.5249 42.2374 79.9186 43.757 80.003 45.7549V45.8393V51.7486C80.003 54.844 80.003 56.87 80.003 62.104V63.2014C80.003 64.1863 79.6655 64.8898 78.9344 65.3963L71.0044 71.0805ZM75.2225 40.6898C74.3226 40.6898 73.5915 41.14 72.9728 42.0405C72.7198 42.4344 72.5791 42.9409 72.5229 43.7288V68.154L78.0627 64.2144C78.4001 63.9893 78.5126 63.7361 78.5126 63.2577V62.1602C78.5126 56.9263 78.5126 54.9002 78.5126 51.8049V45.8393C78.4564 44.1791 78.147 42.9128 77.5565 42.0123C76.9097 41.1119 76.1786 40.6898 75.2225 40.6898Z" fill="#DCAA72"/>
                    <path d="M80.0031 38.5793L78.7658 37.5663C77.7815 36.7784 76.6567 36.3844 75.335 36.3844C74.2665 36.3844 73.2541 36.7221 72.3543 37.3693L71.0326 38.3542V10.693C71.0326 10.2428 71.0888 9.73628 71.4825 9.34233C71.8762 8.97652 72.4105 8.92024 72.7761 8.94838H89.3672C89.7609 8.94838 90.2389 9.00465 90.6045 9.37047C90.9701 9.73628 91.0263 10.2709 90.9982 10.6367C90.9982 11.4809 90.9982 12.3251 90.9982 13.1693C90.9982 14.2667 90.5483 14.8014 89.4234 14.9984L89.086 15.0547C87.9331 15.2516 86.7239 15.4486 85.7396 15.8988C81.859 17.7279 79.9749 20.767 79.9749 25.2412V30.7847C79.9749 33.4298 79.9749 36.1312 79.9749 36.9753L80.0031 38.5793ZM75.335 34.8649C76.488 34.8649 77.5284 35.1181 78.4845 35.5965C78.4845 34.3302 78.4845 32.5574 78.4845 30.7847V25.2412C78.4845 20.2042 80.7061 16.6023 85.121 14.52C86.3021 13.9572 87.6237 13.7602 88.861 13.5351L89.1985 13.4788C89.3672 13.4507 89.4516 13.4226 89.5078 13.3944C89.5078 13.3663 89.5078 13.31 89.5078 13.1412C89.5078 12.297 89.5078 11.4528 89.5078 10.6086C89.5078 10.5523 89.5078 10.4961 89.5078 10.4679C89.4797 10.4679 89.4234 10.4679 89.3672 10.4679H72.7479C72.6636 10.4679 72.6073 10.4679 72.5511 10.4679C72.5511 10.5242 72.5511 10.5805 72.5511 10.693V35.5121C73.4228 35.09 74.3508 34.8649 75.335 34.8649Z" fill="#DCAA72"/>
                    <path d="M56.0724 26.3667C56.1006 22.174 53.401 19.3319 50.7014 18.4033C46.652 16.9963 42.3215 18.8816 40.6061 22.793C40.0156 24.1156 39.8187 25.4663 40.0156 26.7888C40.3812 29.2651 42.3496 31.0379 44.8242 31.0942C47.3551 31.1786 49.4641 29.4621 49.9703 26.9577C50.1952 25.8321 49.9703 24.594 49.3797 23.5528C49.8578 23.9749 50.2515 24.5658 50.3921 25.2412C50.7577 26.7326 50.617 27.9707 49.9703 28.9837L49.8578 29.1807V54.3937L49.9703 54.5907C50.2234 54.9847 50.4764 55.4068 50.7577 55.8007C51.545 56.9263 52.3886 57.9674 53.2323 59.0086C53.7103 59.5995 54.1884 60.1905 54.6664 60.8095L56.0162 62.5823V59.0086C56.0162 55.9414 56.0162 52.9023 56.0162 49.8351C56.0162 42.1249 56.0162 34.1895 56.0724 26.3667ZM54.5258 49.807C54.5258 52.5928 54.5258 55.3505 54.5258 58.1363C54.4977 58.1082 54.4696 58.0519 54.4415 58.0237C53.626 57.0107 52.7823 55.9695 52.0231 54.9002C51.7981 54.5907 51.6013 54.2812 51.4044 53.9435V29.6028C52.1918 28.2802 52.3324 26.6763 51.8825 24.8754C51.6575 23.9467 51.1513 23.1588 50.4764 22.5398C50.139 22.2584 49.8016 22.0614 49.436 21.9488C48.2268 21.5267 46.9614 21.78 46.0334 22.4835L46.9895 23.1307C48.0862 23.8623 48.7049 25.3819 48.4518 26.6763C48.1143 28.4491 46.5958 29.6309 44.8242 29.5747C43.0807 29.5184 41.7309 28.3084 41.4779 26.5637C41.3373 25.5226 41.4779 24.4533 41.9559 23.4121C43.3619 20.2323 46.877 18.7128 50.1671 19.8665C52.2762 20.5981 54.5539 22.9619 54.5258 26.3949C54.4977 34.1895 54.4977 42.1249 54.5258 49.807Z" fill="#DCAA72"/>
                    <path d="M98.422 22.7368C96.7067 18.8254 92.348 16.94 88.3268 18.347C85.6272 19.2756 82.9276 22.1177 82.9557 26.3105C83.012 34.1333 83.012 42.0686 83.012 49.7789C83.012 52.8179 83.012 55.8851 83.012 58.9242V62.4979L84.3618 60.7251C84.8398 60.1061 85.3179 59.5151 85.7959 58.9242C86.6395 57.883 87.4831 56.8137 88.2705 55.7163C88.5236 55.3505 88.7767 54.9565 89.0298 54.5907L89.1423 54.3937V29.0682L89.0298 28.8712C88.4111 27.8581 88.2705 26.6481 88.6642 25.1849C88.8329 24.5095 89.1985 23.9468 89.6765 23.4965C89.1141 24.5377 88.861 25.7477 89.086 26.9014C89.5922 29.4058 91.7012 31.1223 94.2321 31.0379C96.7067 30.9816 98.6751 29.2088 99.0407 26.7326C99.2094 25.41 99.0126 24.0875 98.422 22.7368ZM97.5222 26.5074C97.2691 28.2521 95.9193 29.4621 94.1758 29.5184C92.3761 29.5465 90.9138 28.3647 90.5483 26.62C90.2952 25.3256 90.9139 23.8061 92.0106 23.0744L92.8823 22.4835C91.9543 21.78 90.6889 21.5268 89.4797 21.9488C89.1423 22.0614 88.8329 22.2584 88.5236 22.5116C87.8768 23.1307 87.3425 23.9468 87.1176 24.8472C86.6676 26.62 86.8364 28.1958 87.5675 29.4902V53.9716C87.3707 54.2812 87.1738 54.5626 86.977 54.844C86.2177 55.9133 85.3741 56.9544 84.5586 57.9675C84.5305 57.9956 84.5024 58.0519 84.4742 58.08C84.4742 55.3223 84.4742 52.5365 84.4742 49.7789C84.4742 42.0968 84.5024 34.1333 84.418 26.3105C84.3899 22.8774 86.6676 20.5137 88.7767 19.7821C89.5078 19.5288 90.2671 19.4163 90.9982 19.4163C93.5572 19.4163 95.9193 20.8795 97.016 23.3558C97.4941 24.4251 97.6628 25.4944 97.5222 26.5074Z" fill="#DCAA72"/>
                    <path d="M68.6705 120.887V117.708H69.1204C69.3172 117.708 69.486 117.736 69.5984 117.764C69.739 117.792 69.8515 117.848 69.9359 117.933C70.0484 118.017 70.1327 118.13 70.2171 118.242C70.3015 118.383 70.4139 118.524 70.5264 118.721L72.0168 120.859H73.001C72.523 120.184 71.5388 118.721 71.4544 118.58C71.2857 118.327 71.1732 118.13 71.0888 117.989C71.0045 117.848 70.9201 117.764 70.8639 117.68C70.8076 117.623 70.7233 117.567 70.6389 117.511L70.5264 117.454V117.426C70.8639 117.398 71.1451 117.342 71.37 117.201C71.595 117.089 71.7918 116.92 71.9606 116.723C72.1012 116.526 72.2137 116.329 72.298 116.132C72.3543 115.907 72.4105 115.71 72.4105 115.485C72.4105 115.288 72.3824 115.091 72.298 114.866C72.2137 114.64 72.1012 114.443 71.9325 114.247C71.7637 114.05 71.5106 113.909 71.2013 113.768C70.892 113.627 70.5264 113.571 70.0484 113.571H67.7144V120.803H68.6705V120.887ZM68.6705 114.106H69.7109C69.964 114.106 70.2171 114.134 70.4139 114.218C70.6108 114.303 70.8076 114.387 70.9482 114.528C71.0888 114.669 71.2294 114.809 71.2857 115.006C71.37 115.203 71.3982 115.4 71.3982 115.625C71.3982 115.822 71.37 115.991 71.2857 116.188C71.2013 116.385 71.117 116.554 70.9482 116.695C70.8076 116.835 70.6389 116.976 70.4139 117.06C70.2171 117.145 69.964 117.201 69.6828 117.201H68.6142V114.106H68.6705Z" fill="#DCAA72"/>
                    <path d="M101.487 120.887V117.708H101.937C102.134 117.708 102.303 117.736 102.415 117.764C102.556 117.792 102.668 117.848 102.753 117.933C102.865 118.017 102.949 118.13 103.034 118.242C103.118 118.383 103.231 118.524 103.343 118.721L104.833 120.859H105.818C105.34 120.184 104.355 118.721 104.271 118.58C104.102 118.327 103.99 118.13 103.906 117.989C103.821 117.848 103.737 117.764 103.681 117.68C103.624 117.623 103.54 117.567 103.456 117.511L103.343 117.454V117.426C103.681 117.398 103.962 117.342 104.187 117.201C104.412 117.089 104.609 116.92 104.777 116.723C104.918 116.526 105.03 116.329 105.115 116.132C105.171 115.907 105.227 115.71 105.227 115.485C105.227 115.288 105.199 115.091 105.115 114.866C105.03 114.64 104.918 114.443 104.749 114.247C104.58 114.05 104.327 113.909 104.018 113.768C103.709 113.627 103.343 113.571 102.865 113.571H100.531V120.803H101.487V120.887ZM101.487 114.106H102.528C102.781 114.106 103.034 114.134 103.231 114.218C103.427 114.303 103.624 114.387 103.765 114.528C103.906 114.669 104.046 114.809 104.102 115.006C104.187 115.203 104.215 115.4 104.215 115.625C104.215 115.822 104.187 115.991 104.102 116.188C104.018 116.385 103.934 116.554 103.765 116.695C103.624 116.835 103.456 116.976 103.231 117.06C103.034 117.145 102.781 117.201 102.499 117.201H101.431V114.106H101.487Z" fill="#DCAA72"/>
                    <path d="M23.5369 113.658V120.89H22.6089V113.658H23.5369Z" fill="#DCAA72"/>
                    <path d="M37.3442 113.656V121H37.2879L31.5513 115.372H31.5232V120.887H31.0452V113.543H31.1014L36.838 119.199H36.8661V113.684H37.3442V113.656Z" fill="#DCAA72"/>
                    <path d="M46.174 120.887V114.218H43.4182V113.656H49.8859V114.218H47.1301V120.887H46.174Z" fill="#DCAA72"/>
                    <path d="M60.5998 113.656V114.218H56.8879V116.807H60.0937V117.286H56.8879V120.297H60.5998V120.859H55.9318V113.627H60.5998V113.656Z" fill="#DCAA72"/>
                    <path d="M80.1436 113.656V120.887H79.2156V113.656H80.1436Z" fill="#DCAA72"/>
                    <path d="M87.1457 116.019C87.2863 115.569 87.5112 115.175 87.8487 114.809C88.158 114.443 88.5798 114.134 89.0579 113.909C89.5359 113.656 90.1265 113.543 90.8013 113.543C91.4762 113.543 92.0949 113.656 92.6011 113.909C93.1072 114.162 93.529 114.472 93.8665 114.837C94.2039 115.203 94.4289 115.625 94.5976 116.047C94.7663 116.498 94.8226 116.892 94.8226 117.286C94.8226 117.539 94.7945 117.82 94.7101 118.102C94.6257 118.383 94.5414 118.664 94.4008 118.946C94.2602 119.227 94.0915 119.48 93.8665 119.734C93.6415 119.987 93.3884 120.212 93.0791 120.409C92.7698 120.606 92.4323 120.747 92.0668 120.859C91.7012 120.972 91.2794 121.028 90.8013 121.028C90.1265 121.028 89.5359 120.916 89.0579 120.662C88.5798 120.409 88.158 120.1 87.8487 119.734C87.5394 119.368 87.2863 118.946 87.1457 118.524C87.0051 118.073 86.9207 117.68 86.9207 117.286C86.9207 116.863 87.0051 116.47 87.1457 116.019ZM88.158 118.608C88.2986 119.002 88.4955 119.368 88.7767 119.649C89.0298 119.931 89.3391 120.156 89.6765 120.325C90.014 120.493 90.4077 120.578 90.8295 120.578C91.2232 120.578 91.6168 120.493 91.9824 120.325C92.348 120.156 92.6573 119.931 92.9385 119.649C93.2197 119.368 93.4166 119.002 93.5853 118.608C93.754 118.214 93.8103 117.764 93.8103 117.286C93.8103 116.807 93.7259 116.357 93.5853 115.963C93.4166 115.569 93.2197 115.203 92.9385 114.922C92.6573 114.64 92.348 114.415 91.9824 114.247C91.6168 114.078 91.2513 113.993 90.8295 113.993C90.4077 113.993 90.0421 114.078 89.6765 114.247C89.3391 114.415 89.0298 114.64 88.7767 114.922C88.5236 115.203 88.3267 115.569 88.158 115.963C88.0174 116.357 87.9331 116.807 87.9331 117.286C87.9331 117.736 88.0174 118.186 88.158 118.608Z" fill="#DCAA72"/>
                    <path d="M111.864 118.974C111.864 119.087 111.892 119.227 111.948 119.396C112.004 119.565 112.089 119.706 112.229 119.874C112.37 120.015 112.567 120.156 112.82 120.268C113.073 120.381 113.41 120.437 113.832 120.437C114.366 120.437 114.788 120.325 115.098 120.128C115.407 119.931 115.576 119.621 115.576 119.171C115.576 118.833 115.463 118.552 115.266 118.327C115.069 118.13 114.816 117.933 114.507 117.792C114.198 117.651 113.86 117.511 113.523 117.398C113.185 117.286 112.848 117.145 112.539 116.976C112.229 116.807 111.976 116.61 111.779 116.385C111.582 116.132 111.47 115.822 111.47 115.428C111.47 115.119 111.526 114.866 111.667 114.612C111.779 114.387 111.948 114.19 112.173 114.021C112.37 113.881 112.623 113.74 112.904 113.684C113.185 113.599 113.467 113.571 113.776 113.571C114.057 113.571 114.366 113.599 114.619 113.684C114.901 113.768 115.126 113.853 115.351 113.993C115.576 114.134 115.744 114.303 115.885 114.5C116.025 114.697 116.11 114.922 116.166 115.175H115.491C115.435 114.781 115.266 114.5 114.957 114.303C114.648 114.106 114.282 114.021 113.86 114.021C113.607 114.021 113.382 114.05 113.157 114.106C112.96 114.162 112.792 114.247 112.651 114.359C112.51 114.472 112.398 114.584 112.342 114.725C112.257 114.866 112.229 115.006 112.229 115.175C112.229 115.457 112.342 115.682 112.539 115.879C112.735 116.047 113.017 116.216 113.326 116.329C113.635 116.47 113.973 116.582 114.338 116.723C114.704 116.835 115.041 117.004 115.351 117.173C115.66 117.342 115.913 117.567 116.138 117.848C116.335 118.102 116.447 118.439 116.447 118.861C116.447 119.171 116.391 119.424 116.279 119.677C116.166 119.931 115.997 120.128 115.772 120.297C115.547 120.465 115.294 120.606 114.985 120.69C114.676 120.775 114.31 120.831 113.945 120.831C113.551 120.831 113.213 120.775 112.876 120.69C112.567 120.606 112.285 120.465 112.032 120.297C111.807 120.128 111.611 119.931 111.47 119.706C111.329 119.48 111.245 119.199 111.245 118.918H111.864V118.974Z" fill="#DCAA72"/>
                    <path d="M8.54865 99.417H8.63302L15.7475 86.1914H17.266V101.612H15.2695V89.1179H15.1851L8.23933 101.865H7.84564L1.06858 89.0335H0.9561V101.612H0V86.1914H1.49039L8.54865 99.417Z" fill="#DCAA72"/>
                    <path d="M32.5917 86.1914H31.495L24.9991 101.612H26.0115L27.9237 97.0814L28.3455 96.0684L31.5231 88.6677H31.6075L35.0663 96.0684L35.5162 97.0814L37.6253 101.612H39.7624L32.5917 86.1914Z" fill="#DCAA72"/>
                    <path d="M57.4222 86.1914V87.4014H49.4922V92.9168H56.3255V93.9298H49.4922V100.374H57.4222V101.584H47.4675V86.1633H57.4222V86.1914Z" fill="#DCAA72"/>
                    <path d="M66.5052 97.7005C66.5052 97.9537 66.5895 98.2633 66.6739 98.6009C66.7864 98.9668 66.9832 99.3044 67.2644 99.6421C67.5456 99.9798 67.9956 100.261 68.5298 100.514C69.0923 100.768 69.8234 100.88 70.7514 100.88C71.9043 100.88 72.8323 100.655 73.5353 100.233C74.2383 99.7828 74.5758 99.1074 74.5758 98.1507C74.5758 97.3909 74.3508 96.7719 73.929 96.3216C73.4791 95.8714 72.9448 95.4775 72.2699 95.1679C71.595 94.8584 70.892 94.577 70.1046 94.3237C69.3172 94.0705 68.6142 93.7609 67.9393 93.4233C67.2644 93.0574 66.7301 92.6353 66.2802 92.1007C65.8303 91.566 65.6334 90.8626 65.6334 90.0184C65.6334 89.3712 65.774 88.7802 66.0271 88.2456C66.3083 87.7391 66.6739 87.317 67.1238 86.9793C67.5737 86.6416 68.108 86.3884 68.7267 86.2195C69.3453 86.0507 69.9921 85.9663 70.667 85.9663C71.3138 85.9663 71.9324 86.0507 72.523 86.1914C73.1135 86.3321 73.6478 86.5854 74.1258 86.8667C74.6039 87.1763 74.9976 87.5421 75.3069 87.9642C75.6162 88.3863 75.8131 88.8928 75.8974 89.4274H74.4071C74.2946 88.5551 73.9009 87.936 73.226 87.514C72.5511 87.12 71.7356 86.8949 70.7795 86.8949C70.2171 86.8949 69.7109 86.9512 69.261 87.0919C68.8111 87.2326 68.4455 87.4014 68.1362 87.6547C67.8268 87.8798 67.6019 88.1612 67.4613 88.4707C67.3207 88.7802 67.2363 89.1179 67.2363 89.4556C67.2363 90.0747 67.4613 90.5812 67.9112 90.9751C68.3611 91.3691 68.9235 91.7067 69.6266 91.9881C70.3014 92.2695 71.0607 92.5509 71.8481 92.8323C72.6355 93.0856 73.3947 93.4233 74.0696 93.8172C74.7445 94.2112 75.335 94.6895 75.785 95.2805C76.2349 95.8714 76.4599 96.603 76.4599 97.5035C76.4599 98.1507 76.3193 98.7698 76.0662 99.3044C75.8131 99.8391 75.4194 100.317 74.9413 100.683C74.4633 101.077 73.8728 101.359 73.1979 101.556C72.523 101.753 71.7356 101.865 70.892 101.865C70.0484 101.865 69.2891 101.753 68.5861 101.556C67.8831 101.359 67.2644 101.077 66.7582 100.711C66.224 100.346 65.8303 99.9235 65.5209 99.3888C65.2116 98.8823 65.0429 98.2914 65.0148 97.6723H66.5052V97.7005Z" fill="#DCAA72"/>
                    <path d="M89.9577 101.612V87.4014H84.0524V86.1914H97.8315V87.4014H91.9261V101.612H89.9577Z" fill="#DCAA72"/>
                    <path d="M107.336 101.584V94.8021H108.32C108.742 94.8021 109.08 94.8302 109.361 94.9147C109.642 94.9991 109.867 95.1116 110.092 95.2805C110.317 95.4493 110.514 95.6744 110.711 95.9558C110.908 96.2372 111.133 96.5749 111.386 96.997L114.535 101.584H116.644C115.66 100.12 113.523 97.0251 113.326 96.7156C112.988 96.1809 112.735 95.7588 112.539 95.4774C112.342 95.1961 112.173 94.9709 112.061 94.8302C111.948 94.6895 111.779 94.577 111.611 94.4926L111.386 94.38V94.2956C112.089 94.2393 112.679 94.0986 113.185 93.8454C113.691 93.5921 114.113 93.2544 114.423 92.8605C114.732 92.4665 114.985 92.0444 115.126 91.5661C115.266 91.1158 115.351 90.6656 115.351 90.2154C115.351 89.8214 115.266 89.3993 115.126 88.9209C114.985 88.4426 114.704 88.0205 114.338 87.5984C113.973 87.2044 113.467 86.8668 112.82 86.5854C112.173 86.304 111.357 86.1914 110.373 86.1914H105.368V101.584H107.336ZM107.336 87.1763H109.558C110.12 87.1763 110.626 87.2607 111.076 87.4296C111.526 87.5984 111.92 87.8235 112.229 88.1049C112.567 88.3863 112.792 88.724 112.96 89.1179C113.129 89.5119 113.213 89.934 113.213 90.4123C113.213 90.8063 113.129 91.2002 112.988 91.6223C112.82 92.0163 112.595 92.3821 112.285 92.7198C111.976 93.0575 111.611 93.3107 111.161 93.5358C110.711 93.7328 110.205 93.8454 109.614 93.8454H107.336V87.1763V87.1763Z" fill="#DCAA72"/>
                    <path d="M131.829 86.1914H130.733L124.237 101.612H125.249L127.161 97.0814L127.583 96.0684L130.761 88.6677H130.845L134.304 96.0684L134.754 97.0814L136.863 101.612H139L131.829 86.1914Z" fill="#DCAA72"/>
                    <path d="M37.6199 98.1442V97.497H27.1309V98.1442H37.6199Z" fill="#DCAA72"/>
                    <path d="M136.856 98.1452V97.498H126.367V98.1452H136.856Z" fill="#DCAA72"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_133_129">
                    <rect width="139" height="121" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>                    
            </div>
            <div class="numbers">
                <div>
                    +7 495 3488844
                </div>
                <div>
                    +44 39 2545465
                </div>
            </div>
        </div>
        <div class="top-line"></div>
      </div>
    );
  }
  
export default Header;