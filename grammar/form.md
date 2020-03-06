### 4.7.表单

  使用v-model进行数据双向绑定

1. 输入框

   ```
   <input v-model="message" />
   <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
   ```

2. 单选按钮

   ```
     <input type="radio" id="runoob" value="Runoob" v-model="picked">
     <label for="runoob">Runoob</label>
     <br>
     <input type="radio" id="google" value="Google" v-model="picked">
     <label for="google">Google</label>
   
   ```

   

3. 复选框

   ```
     <p>单个复选框：</p>
     <input type="checkbox" id="checkbox" v-model="checked">
     <label for="checkbox">{{ checked }}</label>
       
     <p>多个复选框：</p>
     <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
     <label for="runoob">Runoob</label>
     <input type="checkbox" id="google" value="Google" v-model="checkedNames">
     <label for="google">Google</label>
     <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
     <label for="taobao">taobao</label>
   
   ```

   每个复选框由一个input和一个label组成。

   input中包含了v-model，value为该复选框的值

   label中的for 指向其对应的input的id。label标签内容为所展示的内容

   注意：1. input的类型要是checkbox

   ​            2.多个复选框的id不能相同

4. 下拉列表

   ```
   <select v-model="selected" name="fruit">
       <option value="">选择一个网站</option>
       <option value="www.runoob.com">Runoob</option>
       <option value="www.google.com">Google</option>
   </select>
   
   ```

   使用select标签，option标签为每个下拉选项