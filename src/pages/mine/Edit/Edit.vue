<template>
<div id="edit" class="page">
    <app-header isLeft="true" class="edit-head" >        
    </app-header>

     <ul  class="edit">
         <router-link to="/mine/edit/header_up">
            <li  class="img_head" >
                <img src="/images/mine/mine-Avatar.png" alt="" /> 
            </li>
            <li class="edit_up"><span>点击上传</span></li>
         </router-link>
            
      </ul>

    <message ></message>
 
     <keep-alive>
         <router-view></router-view>
     </keep-alive>
    

</div>
</template>

<script>
import AppHeader from '../../../components/app-header'
import Message from './children/Message'
import {mapState} from '../../../store/mode/login'
export default {
    components:{
        [AppHeader.name]:AppHeader,
        [Message.name]:Message,
    },
    

}
</script>

<style lang="scss" scoped>
#edit{
    background: #fff;
//    background:rgba(251,180,65,1);
    position:absolute;
    bottom: 0px;
    top:0;
    left:0;
    z-index: 2; 
    .edit-head{
        background:rgba(251,180,65,1);
        position: relative;
        z-index: 6;
    }
     .edit{      
         text-align: center;
         padding-top: .746667rem;
          background:rgba(251,180,65,1); 
         .img_head{          
            img{
                 width:1.893333rem;
             }
         }
        .edit_up{                
            padding-bottom: .666667rem;
            span{
            font-size: .266667rem;
            color: #fff;
            line-height: .853333rem;  
                }
            }
        }
       
    
}


</style>


<style>
 
</style>
